import { LightningElement } from 'lwc';

export default class ForEachTask123 extends LightningElement {
    cars=[
        {
        id:1,
        brand:'Toyota',
        model:'Avensis',
        year:2015,
        picLink:'https://www.carjunction.com/car_images2/40494_52366/40494_52366_269053.jpg' 
      },
        {
        id:2,
        brand:'Honda',
        model:'Civic',
        year:2016,
        picLink:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/2017_Honda_Civic_EX_VTEC_CVT_1.0_Front.jpg/1920px-2017_Honda_Civic_EX_VTEC_CVT_1.0_Front.jpg '
      },
        {
        id:3,
        brand:'Volkswagen',
        model:'Passat',
        year:2019,
        picLink:'https://cdn-ds.com/blogs-media/sites/479/2019/12/21082243/2020-Volkswagen-Passat-Tornado-Red-B_o.png' 
      }
    ];  
}