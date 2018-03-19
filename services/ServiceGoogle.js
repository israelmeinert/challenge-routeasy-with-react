export default class ServiceGoogle {

    constructor(){
        this.url = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    }

    get(address){
        return fetch(this.url+ this.formatAddress(address))
                .then((res)=> (res.ok) ? res.json() : res )
    }

    formatAddress(address){
        const formatedAddress = address.replace(' ', '+');

        return formatedAddress;
    }
    

}