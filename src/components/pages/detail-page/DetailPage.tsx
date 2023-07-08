 import React from 'react';
 import {useAppSelector} from "../../../types/hooks/useAppSelector";
 import Header from "../../header/Header";

const DetailPage = () => {
    const {detail,error,loader} = useAppSelector(state => state.movies)

    return (
        <>
            <div className="w-[1440px] h-[571px] px-[60px] pt-[30px] pb-[31px] border border-neutral-800 justify-start items-start inline-flex">
                <div className="justify-start items-start flex">
                    <div className="w-[300px] h-[510px] relative rounded-lg">
                        <img className="w-[300px] h-[450px] left-0 top-0 absolute" src={detail.poster_path} />
                        <div className="w-[300px] h-[60px] left-0 top-[450px] absolute bg-sky-950 rounded-bl-lg rounded-br-lg">
                            <div className="w-[300px] h-[60px] left-0 top-0 absolute">
                                <img className="w-9 h-9 left-[19.69px] top-[12px] absolute rounded" src="https://via.placeholder.com/36x36" />
                                <div className="left-[67.69px] top-[14px] absolute flex-col justify-start items-start inline-flex">
                                    <div className="opacity-80 text-white text-[16px] font-normal leading-none">Доступны прокат или покупка</div>
                                    <div className="text-white text-[16px] font-semibold leading-none">Смотреть сейчас</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[1020px] h-[510px] relative">
                        <div className="left-[40px] top-[64.83px] absolute flex-col justify-start items-start inline-flex">
                            <div className="pr-[709px] pt-[1px] justify-start items-start inline-flex">
                                <div><span className="text-white text-[35.20000076293945px] font-bold">Форсаж 10</span><span className="text-white text-[35.20000076293945px] font-semibold"> </span><span className="text-white text-[35.20000076293945px] font-normal">(2023)</span></div>
                            </div>
                            <div className="w-[446.86px] h-[21.34px] relative">
                                <div className="pl-[5px] pr-[4.81px] pt-[1.95px] pb-[3.39px] left-0 top-0 absolute rounded-sm border border border border border-white border-opacity-60 justify-start items-start inline-flex">
                                    <div className="text-white text-opacity-60 text-[16px] font-normal leading-none">PG-13</div>
                                </div>
                                <div className="left-[56.81px] top-0 absolute text-white text-[16px] font-normal">19/05/2023 (US)</div>
                                <div className="pl-[7px] pb-[1.34px] left-[163.23px] top-0 absolute justify-start items-end gap-[7px] inline-flex">
                                    <div className="text-white text-[17.600000381469727px] font-normal leading-none">•</div>
                                    <div className="text-white text-[16px] font-normal">боевик, криминал, триллер</div>
                                </div>
                                <div className="pl-[7px] pb-[1.34px] left-[377.83px] top-0 absolute justify-start items-end gap-[7px] inline-flex">
                                    <div className="text-white text-[17.600000381469727px] font-normal leading-none">•</div>
                                    <div className="text-white text-[16px] font-normal">2h 22m</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[980px] h-[68px] left-[40px] top-[155.17px] absolute">
                            <div className="left-0 top-0 absolute justify-start items-center gap-1.5 inline-flex">
                                <div className="w-[68px] h-[68px] relative bg-gray-900 rounded-[34px]">
                                    <div className="w-[29.67px] h-4 left-[19.16px] top-[42px] absolute" />
                                    <img className="w-[60px] h-[60px] left-[4px] top-[4px] absolute" src="https://via.placeholder.com/60x60" />
                                </div>
                                <div className="text-white text-[16px] font-bold">Рейтинг</div>
                            </div>
                            <div className="w-[46px] h-[46px] left-[154.25px] top-[11px] absolute bg-sky-950 rounded-3xl">
                                <div className="w-4 h-4 left-[15px] top-[15px] absolute">
                                    <div className="w-4 h-4 left-0 top-0 absolute" />
                                </div>
                            </div>
                            <div className="w-[46px] h-[46px] left-[220.25px] top-[11px] absolute bg-sky-950 rounded-3xl">
                                <div className="w-4 h-4 left-[15px] top-[15px] absolute">
                                    <div className="w-4 h-4 left-0 top-0 absolute" />
                                </div>
                            </div>
                            <div className="w-[46px] h-[46px] left-[286.25px] top-[11px] absolute bg-sky-950 rounded-3xl">
                                <div className="w-4 h-4 left-[15px] top-[15px] absolute">
                                    <div className="w-4 h-4 left-0 top-0 absolute" />
                                </div>
                            </div>
                            <div className="w-[46px] h-[46px] left-[352.25px] top-[11px] absolute bg-sky-950 rounded-3xl">
                                <div className="w-4 h-4 left-[15px] top-[15px] absolute">
                                    <div className="w-4 h-4 left-0 top-0 absolute" />
                                </div>
                            </div>
                        </div>
                        <div className="w-[980px] h-[202px] left-[40px] top-[243.17px] absolute">
                            <div className="left-0 top-0 absolute opacity-70 text-white text-[17.600000381469727px] font-normal">«Последний заезд»</div>
                            <div className="left-0 top-[32px] absolute text-white text-[20.799999237060547px] font-semibold">Обзор</div>
                            <div className="left-0 top-[66px] absolute text-white text-[16px] font-normal">Дом Торетто и его семья становятся мишенью для мстительного сына наркобарона Эрнана Рейеса.</div>
                            <div className="w-[980px] h-24 left-0 top-[106px] absolute">
                                <div className="pr-5 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                                    <div className="pr-[218.39px] justify-start items-start inline-flex">
                                        <div className="text-white text-[16px] font-bold">Dan Mazeau</div>
                                    </div>
                                    <div className="pr-[198.39px] justify-start items-start inline-flex">
                                        <div className="text-white text-[14.399999618530273px] font-normal">Screenplay, Story</div>
                                    </div>
                                </div>
                                <div className="pr-5 left-[323.39px] top-0 absolute flex-col justify-start items-start inline-flex">
                                    <div className="pr-[234.39px] justify-start items-start inline-flex">
                                        <div className="text-white text-[16px] font-bold">Justin Lin</div>
                                    </div>
                                    <div className="pr-[198.39px] justify-start items-start inline-flex">
                                        <div className="text-white text-[14.399999618530273px] font-normal">Screenplay, Story</div>
                                    </div>
                                </div>
                                <div className="left-[646.78px] top-0 absolute flex-col justify-start items-start inline-flex">
                                    <div className="pr-[171.39px] justify-start items-start inline-flex">
                                        <div className="text-white text-[16px] font-bold">Gary Scott Thompson</div>
                                    </div>
                                    <div className="pr-[258.39px] justify-start items-start inline-flex">
                                        <div className="text-white text-[14.399999618530273px] font-normal">Characters</div>
                                    </div>
                                </div>
                                <div className="pr-5 left-0 top-[38px] absolute flex-col justify-start items-start inline-flex">
                                    <div className="pr-[200.39px] pt-5 justify-start items-start inline-flex">
                                        <div className="text-white text-[16px] font-bold">Louis Leterrier</div>
                                    </div>
                                    <div className="pr-[254.39px] justify-start items-start inline-flex">
                                        <div className="text-white text-[14.399999618530273px] font-normal">Director</div>
                                    </div>
                                </div>
                                <div className="pr-5 left-[323.39px] top-[38px] absolute flex-col justify-start items-start inline-flex">
                                    <div className="pr-[230.39px] pt-5 justify-start items-start inline-flex">
                                        <div className="text-white text-[16px] font-bold">Zach Dean</div>
                                    </div>
                                    <div className="pr-[271.39px] justify-start items-start inline-flex">
                                        <div className="text-white text-[14.399999618530273px] font-normal">Story</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailPage;