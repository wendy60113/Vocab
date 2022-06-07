(function(){
    'use strict';

    const en_productdata=[
        {
            'src':'./img/product/01.png',
            'url':'https://www.17buy.com.tw/books/books_view.php?books_id=1320',
            'class':'item swiper animdelay1'
        },
        {
            'src':'./img/product/02.png',
            'url':'https://www.17buy.com.tw/books/books_view.php?books_id=1329',
            'class':'item swiper animdelay2'
        },
        {
            'src':'./img/product/03.png',
            'url':'https://www.17buy.com.tw/books/books_view.php?books_id=1328',
            'class':'item swiper animdelay3'
        },
        {
            'src':'./img/product/04.png',
            'url':'https://www.17buy.com.tw/books/books_view.php?books_id=1333',
            'class':'item swiper animdelay4'
        },
        {
            'src':'./img/product/05.png',
            'url':'https://www.17buy.com.tw/books/books_view.php?books_id=1334',
            'class':'item swiper animdelay5'
        },
        {
            'src':'./img/product/06.png',
            'url':'https://www.17buy.com.tw/books/books_view.php?books_id=1335',
            'class':'item swiper animdelay6'
        },
        {
            'src':'./img/product/07.png',
            'url':'https://www.17buy.com.tw/books/books_view.php?books_id=1325',
            'class':'item swiper animdelay7'
        },
        {
            'src':'./img/product/08.png',
            'url':'https://www.17buy.com.tw/books/books_view.php?books_id=1347',
            'class':'item swiper animdelay8'
        },
        {
            'src':'./img/product/09.png',
            'url':'https://www.17buy.com.tw/books/',
            'class':'item swiper animdelay8'
        }
    
    ]

    const jp_productdata=[
        {
            'src':'./img/product/21.png',
            'url':'https://www.17buy.com.tw/books/books_view.php?books_id=1336',
            'class':'item swiper animdelay1'
        },
        {
            'src':'./img/product/22.png',
            'url':'https://www.17buy.com.tw/books/books_view.php?books_id=1337',
            'class':'item swiper animdelay2'
        },
        {
            'src':'./img/product/23.png',
            'url':'https://www.17buy.com.tw/books/',
            'class':'item swiper animdelay3'
        },
        {
            'src':'./img/product/24.png',
            'url':'https://www.17buy.com.tw/books/',
            'class':'item swiper animdelay4'
        }
       
    ]

    const kr_productdata=[
        {
            'src':'./img/product/31.png',
            'url':'https://www.17buy.com.tw/books/books_view.php?books_id=1338',
            'class':'item swiper animdelay1'
        },
        {
            'src':'./img/product/32.png',
            'url':'https://www.17buy.com.tw/books/books_view.php?books_id=1339',
            'class':'item swiper animdelay2'
        }
    ]

    function SliderItem(props){
        return(
            <div className={props.slideritemclass} >
                <img className='pboximg' src={props.imgsrc} onClick={props.testurl}/><br/>
            </div>
            
        )
    }

    function En_Slider(){
        const slideritem = en_productdata.map((h, index) =>
        <SliderItem
            key={index}
            imgsrc={h.src}
            testurl={()=> window.open(h.url, "_blank")}
            slideritemclass={h.class}
        />
        )
        return(
            <div id='en_slider' className="product_en_slider owl-carousel  owl-theme">                   
                {slideritem}
            </div>
        )
    }

    function Jp_Slider(){
        const slideritem = jp_productdata.map((m, index) =>
        <SliderItem
            key={index}
            imgsrc={m.src}
            testurl={()=> window.open(m.url, "_blank")}
            slideritemclass={m.class}
        />
        )
        return(
            <div id='jp_slider' className="product_jp_slider owl-carousel  owl-theme">                   
                {slideritem}
            </div>
        )
    }

    function Kr_Slider(){
        const slideritem = kr_productdata.map((j, index) =>
        <SliderItem
            key={index}
            imgsrc={j.src}
            testurl={()=> window.open(j.url, "_blank")}
            slideritemclass={j.class}
        />
        )
        return(
            <div id='kr_slider' className="product_jp_slider owl-carousel  owl-theme">                   
                {slideritem}
            </div>
        )
    }

    


    ReactDOM.render(
        <div className='productbg'>
            <div className='productbox'>

                <div className='en_box'>
                    <div className='boxline'></div>
                    <span className='pboxtitle'>英文</span>
                    <En_Slider/>
      
                </div>

                <div className='jp_box'>
                    <div className='boxline'></div>
                    <span className='pboxtitle'>日文</span>
                    <Jp_Slider/>
         
                </div>

                <div className='kr_box'>
                    <div className='boxline'></div>
                    <span className='pboxtitle'>韓文</span>
                    <Kr_Slider/>
         
                </div>

            </div>
        </div>
        ,
        document.getElementById('product'));
    

})();