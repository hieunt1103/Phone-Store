import Slider from 'react-slick';
import SliderWrapper from './SlickStyle';

function SliderComponent() {
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 500,
        arrows: false,
        adaptiveHeight: true,
        appendDots: (dots) => <ul>{dots}</ul>,
        customPaging: (i) => (
            <div className="ft-slick__dots--custom">
                <div className="loading" />
            </div>
        ),
    };

    return (
        <div className="slick-wrapper">
            <SliderWrapper>
                <Slider {...settings}>
                    <div className="testimoni--wrapper">
                        <img src="https://cdn.hoanghamobile.com/i/home/Uploads/2024/03/12/hotsale-tecno-tong-1200x375.jpg"></img>
                    </div>
                    <div className="testimoni--wrapper">
                        <img src="https://cdn.hoanghamobile.com/i/home/Uploads/2024/02/15/1200x200-infinix-060224.jpg"></img>
                    </div>
                    <div className="testimoni--wrapper">
                        <img src="https://cdn.hoanghamobile.com/i/home/Uploads/2024/03/12/hot-chuyen-muc.png"></img>
                    </div>
                </Slider>
            </SliderWrapper>
        </div>
    );
}

export default SliderComponent;
