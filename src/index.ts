import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();

const company = new Company();

const gmap = new CustomMap('map');

gmap.addMarker(user);
gmap.addMarker(company);



