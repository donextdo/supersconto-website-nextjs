import Head from 'next/head'
import Header from "../src/components/Header/Header";
import Button from "../src/components/Button/Button";

export default function Home() {
    return (
        <div className="home-page">
            <Header/>
            <main className="main-content">
                <div className="product-list">
                    <div className="product-gallery">
                        <h1 className='text-4xl text-red-600 font-bold'>Hello world</h1>
                    </div>
                    <Button styleClass="primary-button">
                        Load Nearest Flyers
                    </Button>
                </div>
                <div className="login">

                </div>
            </main>
        </div>
    )
}
