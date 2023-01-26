import { Swiper, SwiperSlide } from 'swiper/react'
import { slides } from './view/constants'
import styled from 'styled-components'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const STutorial = styled.div`
    width: 300px;
    height: 300px;

    .swiper-pagination-bullet {
        background: #fff;
    }

    .swiper-button-next,
    .swiper-button-prev {
        color: #fff;
    }
`

export const Tutorial = () => {
    return (
        <STutorial>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
            >
                {slides.map((Slide: React.FC, index: number) => (
                    <SwiperSlide key={`Slide-${index}`}>
                        <Slide />
                    </SwiperSlide>
                ))}
            </Swiper>
        </STutorial>
    )
}
