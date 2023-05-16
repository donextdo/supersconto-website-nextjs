import React, { useEffect, useMemo, useState } from "react";
// import { FaBars } from 'react-icons/fa'
import Link from "next/link";
import TextInput from "../Utils/TextInput";
import logo from "../../../assets/logo/logo.png";
import Image from "next/image";
import { FaSearch, FaLocationArrow, FaUserCircle } from "react-icons/fa";
import { SlHandbag, SlUser } from "react-icons/sl";
import { TfiWorld } from "react-icons/tfi";
import { useRouter } from "next/router";
import Language from "../Language/Language";
import { useTranslation } from "next-i18next";
import UserProfile from "./UserProfile ";
import CartPopup from "../../features/cart/popup-cart/CartPopup";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Script from "next/script";

interface Prediction {
  description: String;
  place_id: string;
}

const Header = () => {
  const [query, setQuery] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [languagePopup, setLanguagePopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState(false);
  const totalCount = useSelector((state: RootState) => state.cart.totalCount);

  const [predictions, setPredictions] = useState([]);
  const [hide, setHide] = useState(false);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [formatAddress, setFormatAddress] = useState<string | null>(null);

  const token = useMemo(() => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("token");
    }
    return null;
  }, []);

  const email = useMemo(() => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("email");
    }
    return null;
  }, []);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setQuery(e.target.value);
  };

  // const handleLocationChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setLocation(e.target.value);
  // };

  const handleLocationChange = (event: any) => {
    setLocation(event.target.value);
    const location = event.target.value;
    const autocompleteService = new google.maps.places.AutocompleteService();
    autocompleteService.getPlacePredictions(
      {
        input: location,
        types: ["geocode"],
      },
      handleAutocompleteResults
    );
  };

  const handleAutocompleteResults = (predictions: any, status: any) => {
    setHide(false);
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      setPredictions(predictions);
      console.log("prediction : ", predictions);
    }
  };

  function handlePredictionClick(place_id: any): void {
    setHide(false);
    console.log("place_id: ", place_id);
    const placeService = new google.maps.places.PlacesService(
      document.createElement("div")
    );
    console.log("placeService: ", placeService);

    placeService.getDetails(
      { placeId: place_id },
      (
        placeResult: google.maps.places.PlaceResult | null,
        placeStatus: google.maps.places.PlacesServiceStatus
      ) => {
        console.log("placeResult: ", placeResult);

        if (
          placeStatus === google.maps.places.PlacesServiceStatus.OK &&
          placeResult
        ) {
          const lat = placeResult.geometry?.location?.lat();
          const lng = placeResult.geometry?.location?.lng();
          const formattedAddress = placeResult.formatted_address;
          console.log("Formatted Address: ", formattedAddress);
          setLatitude(lat as number | null);
          setLongitude(lng as number | null);
          setLocation(formattedAddress as string);
          setFormatAddress(location);
        }
      }
    );
  }

  const handleSearch = (): void => {
    router.push(`/search-results?query=${query}`);
  };

  const handleLocationSearch = (): void => {
    console.log("location empty : ", location);
    if (!location) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          console.log("position : ", position);
          // setLocation(`${lat}, ${lng}`);
          getAddressFromCoordinates(lat, lng);
          setHide(true);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      getAddressFromCoordinates(Number(latitude), Number(longitude));
      setHide(true);
    }
  };

  function getAddressFromCoordinates(lat: number, lng: number): void {
    const geocoder = new google.maps.Geocoder();
    const latLng = new google.maps.LatLng(lat, lng);

    geocoder.geocode({ location: latLng }, (results, status) => {
      if (
        status === google.maps.GeocoderStatus.OK &&
        results &&
        results.length > 0
      ) {
        const formattedAddress = results[0].formatted_address;
        console.log("Formatted Address: ", formattedAddress);

        // Use the formatted address as needed
        setLocation(formattedAddress);
      }
    });
  }

  const { i18n } = useTranslation();

  const handleLanguage = () => {
    setLanguagePopup(!languagePopup);
  };

  function handleChangeLanguage(language: any) {
    // const language = event.target.value;
    // i18n.changeLanguage('it');
    // i18n.changeLanguage('en')
  }

  function handleKeyDown(event: any) {
    if (event.key === "Enter") {
      //   console.log("Enter key pressed!");
      router.push(`/search-results?query=${query}`);

      // Add your code here to handle the Enter key press
    }
  }

  const handleProfile = () => {
    if (token) {
      router.push("/account");
    } else {
      router.push("/LoginRegister");
    }
  };

  const handleClick = () => {
    // setCart(!cart)
  };
  const hnadleEnter = () => {
    setCart(true);
  };
  const handleLeave = () => {
    setCart(false);
  };

  return (
    <header>
      <div className="flex items-center w-full px-10 ">
        <div className="flex items-center w-full gap-4 pl-16 lsm:pl-0">
          <Link href={"/"} className="text-3xl text-[#008C45] font-semibold ">
            <Image
              src={logo}
              alt="LOGO"
              className="w-auto h-11 sm:h-9 md:h-11"
            ></Image>
          </Link>
        </div>

        <div className="flex items-center gap-4 text-right">
          <section className="hidden md:block">
            <div className="flex items-center flex-raw">
              <TextInput
                value={query}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                Styles="bg-[#EDEDED] text-[#3D3B3B] text-sm font-light md:w-48 lg:w-60 xl:w-96 rounded-md h-[40px]"
                placeholder="Search by Category or Items"
              />
              <button
                disabled={!query}
                onClick={handleSearch}
                className="relative"
              >
                <FaSearch className="absolute text-white bg-[#008C45] w-12 h-[40px] px-4 -left-8 -bottom-[20px] rounded-r-md" />
              </button>
            </div>
          </section>

          <section className="hidden md:block">
            <div className="flex items-center ml-8 flex-raw lg:ml-20">
              <Script
                src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyALJN3bDbGEk8ppXieiWNnwHVYM_8ntKng&libraries=places`}
                onLoad={() => console.log("Google Maps API script loaded")}
              />
              <div className="relative w-full">
                <TextInput
                  value={location}
                  onChange={handleLocationChange}
                  Styles="bg-[#EDEDED] text-[#3D3B3B] text-sm font-light md:w-48 lg:w-60 xl:w-96 rounded-l-md h-[40px]"
                  placeholder="Search by Location"
                />
                {predictions.length > 0 && !hide && (
                  <ul className="absolute top-full left-0 w-full bg-white z-10 border border-gray-300 rounded-md shadow-lg">
                    {predictions.map((prediction: Prediction) => (
                      <li
                        key={prediction.place_id}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-left"
                        onClick={() =>
                          handlePredictionClick(prediction.place_id)
                        }
                      >
                        {prediction.description}
                      </li>
                    ))}
                  </ul>
                )}
                <button
                  className="absolute right-0 top-0 bottom-0"
                  onClick={handleLocationSearch}
                >
                  <FaLocationArrow className="text-white bg-blue-400 w-12 h-[40px] px-4 rounded-r-md" />
                </button>
              </div>
            </div>
          </section>

          {/* <div className='flex items-center w-full gap-4'>


                        <Link href={'/'}
                            className='text-3xl text-[#008C45] font-semibold'
                        >
                            <Image src={logo} alt="LOGO" className='w-auto h-9 sm:h-14 md:h-16'></Image>
                        </Link>

                        
    </div> */}
          <button className="ml-10 lg:ml-16" onClick={handleLanguage}>
            <TfiWorld className="fill-[#008C45] w-6 h-6 " />
          </button>
          {languagePopup && (
            <Language
              setLanguagePopup={setLanguagePopup}
              handleChangeLanguage={handleChangeLanguage}
            />
          )}
            <div
            className="relative"
            onMouseEnter={hnadleEnter}
            onMouseLeave={handleLeave}
          >
            <button
              className="border border-[#fff1ee] bg-[#fff1ee] rounded-full p-2"
              onClick={handleClick}
            >
              <SlHandbag className="text-2xl text-[#ea2b0f]" />
            </button>

            {cart && <CartPopup setCart={setCart} />}
            {totalCount > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center">
                {totalCount}
              </div>
            )}
          </div>

          {/* Account */}
          {/* <div>
            <Link href="/account">
              <button className="p-2 ml-4 border border-green-700 rounded-full shadow-lg hover:bg-gray-200 lg:ml-8">
                <SlUser className="fill-[#008C45] w-6 h-6" />
              </button>
            </Link>
          </div> */}

          {/* Login Register */}
          <div>
            <button
              className="ml-4 lg:ml-8 border bg-green-700  border-green-700 rounded-full shadow-lg hover:bg-gray-200  w-10 h-10 flex items-center justify-center "
              onClick={handleProfile}
            >
              {isLoggedIn ? (
                <UserProfile email={email} />
              ) : (
                <SlUser className="fill-[#FFFFFF] w-6 h-6" />
              )}

              {/* <SlUser className="fill-[#008C45] w-6 h-6" /> */}
            </button>
            {/* <button className="ml-4 border border-green-700 rounded-full shadow-lg hover:bg-gray-200 lg:ml-8 w-10 h-10 flex items-center justify-center" >A
                </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
