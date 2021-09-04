import { Company } from './Company';
import { User } from './User';

export class CustomMap {
 googleMap: google.maps.Map;

 constructor(element) {
     this.googleMap = new google.maps.Map(document.getElementById(element), {
        zoom:  1,
        center: {
            lat: 0,
            lng: 0
        }
    })
 }

 addMarker(mappableObj: User | Company): void {
     new google.maps.Marker({
        map: this.googleMap,
        position: {
            lat: mappableObj.location.lat,
            lng: mappableObj.location.long
        }
     });
 }
};

