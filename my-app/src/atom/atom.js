import {
    atom,
  } from 'recoil';

export const pictureList = atom({
    key : 'list/pictureList',
    default:[
        "https://ifh.cc/g/jXnWcP.png", // 나침반
        "https://ifh.cc/g/Vo3z5b.png", // 습도
        "https://ifh.cc/g/vcKxk7.png", // 태양
        "https://ifh.cc/g/Ckn4gr.png", // 태양추적
        "https://ifh.cc/g/0MYVFz.png", // 태양추적모듈
        "https://ifh.cc/g/qbjMso.png", // 온도
    ]
})