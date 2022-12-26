const BASE_URL = 'http://apidev.marriextransfer.com/v1/api'
// const BASE_URL = 'http://localhost:3000/v1/api'

const requests = {
    fetchCatelogs: `${BASE_URL}/catelog/book`,
    findCatalogById: (id: string) => `${BASE_URL}/catelog/book/find/${id}`,
    getCatalogBookPageItemByIds:`${BASE_URL}/catelog/item/find-list`,
}

export default requests