//import { Faktur } from './faktur';

// export const FAKTURS: Faktur[] = [
export const FAKTURS = [
  { id: 1, noFak: '000001', tglFak:'2018/11/08', custName:'Aldi', total: 0,
    detail: [
              { id:1, fakturId: 1, prodName: 'minyak', qty:18, price: 100},
              { id:2, fakturId: 1, prodName: 'beras' , qty:23, price: 200},
            ]
  },
  { id: 2, noFak: '000002', tglFak:'2018/11/08', custName:'Cynthia', total: 0,
      detail: [
              { id:1, fakturId: 2, prodName: 'minyak', qty:16, price: 100},
              { id:2, fakturId: 2, prodName: 'beras' , qty:12, price: 200},
              { id:3, fakturId: 2, prodName: 'gula' , qty:31, price: 300},
            ]
  },
  { id: 3, noFak: '000003', tglFak:'2018/12/08', custName:'Aldi', total: 0,
    detail: [
              { id:1, fakturId: 3, prodName: 'minyak', qty:15, price: 100},
              { id:2, fakturId: 3, prodName: 'gula' , qty:22, price: 300},
            ]
  },
  { id: 4, noFak: '000005', tglFak:'2018/12/08', custName:'Cynthia', total: 0,
      detail: [              
              { id:1, fakturId: 4, prodName: 'beras' , qty:25, price: 200},
            ]
  },
  { id: 5, noFak: '000004', tglFak:'2018/12/08', custName:'Hilal', total: 0,
      detail: [
              { id:1, fakturId: 5, prodName: 'minyak', qty:17, price: 100},
              { id:2, fakturId: 5, prodName: 'gula' , qty:23, price: 300},
            ]
  },
  { id: 6, noFak: '000006', tglFak:'2018/13/08', custName:'Aldi', total: 0,
      detail: [
              { id:1, fakturId: 6, prodName: 'beras' , qty:12, price: 200},
              { id:2, fakturId: 6, prodName: 'gula' , qty:33, price: 300},
            ]
  },
  { id: 7, noFak: '000007', tglFak:'2018/13/08', custName:'Hilal', total: 0,
      detail: [
              { id:1, fakturId: 7, prodName: 'gula' , qty:32, price: 300},
            ]
  },
  { id: 8, noFak: '000008', tglFak:'2018/13/08', custName:'Cynthia', total: 0,
      detail: [
              { id:1, fakturId: 8, prodName: 'minyak', qty:11, price: 100},
            ]
  },
  { id: 9, noFak: '000009', tglFak:'2018/13/08', custName:'Imam', total: 0,
      detail: [
              { id:1, fakturId: 9, prodName: 'minyak', qty:14, price: 100},
              { id:2, fakturId: 9, prodName: 'beras' , qty:21, price: 200},
            ]
  },
];