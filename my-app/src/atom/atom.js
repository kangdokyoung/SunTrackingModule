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

export const getData = atom({
    key: 'getData',
    default: [],
})

export const angle = atom({
    key : 'info/angle',
    default: 0,
})

export const temperature = atom({
    key : 'info/temperature',
    default: 0,
})

export const humidity = atom({
    key : 'info/humidity',
    default: 0,
})

export const magnitude = atom({
    key : 'info/magnitude',
    default: 0,
})

export const light_1 = atom({
    key : 'info/light1',
    default: 0,
})

export const light_2 = atom({
    key : 'info/light2',
    default: 0,
})

export const light_3 = atom({
    key : 'info/light3',
    default: 0,
})

export const light_4 = atom({
    key : 'info/light4',
    default: 0,
})