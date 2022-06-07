(function(){
    'use strict';

    ReactDOM.render(
        <div className='ppbox'>
            <div className='pptitle'>
                <span>書到用時方恨少</span><br/>
                <span>你也有單字量不足的問題嗎？</span>
            </div>

            <div className='ppswiperbox'>
                <div id='pp_arrowbox' className='ppswiperboxanim'>
                    <div className='pp_arrow'></div>
                    <div className='pp_arrow'></div>
                </div>
            
                
                <div className="painpoint_slider owl-carousel  owl-theme swiperbox">
                
                    <div className="item swiper ppswiperboxanim animdelay1">
                        <img src='./img/PainPoint_1.png'/>
                    
                        <div className='ppswiperboxdown'>
                            <span className='ppfirsttitle'>到底記起來多少</span><br/>
                            <span className='ppsectitle'>背了很多次應試還是會忘記</span>
                        </div>
                    </div>

                    <div className="item swiper ppswiperboxanim animdelay3">
                        <img src='./img/PainPoint_2.png'/>
                        <div className='ppswiperboxdown'>
                            <span className='ppfirsttitle'>看得懂念不出來</span><br/>
                            <span className='ppsectitle'>只有看到才懂意思，聽發音完全沒概念！</span>
                        </div>
                    </div>

                    <div className="item swiper ppswiperboxanim animdelay5">
                        <img src='./img/PainPoint_3.png'/>
                        <div className='ppswiperboxdown'>
                            <span className='ppfirsttitle'>詞性改變意思不一樣</span><br/>
                            <span className='ppsectitle'>單字只背單一詞性，但考試卻愛考沒背的那一個</span>
                        </div>
                    </div>

                    <div className="item swiper ppswiperboxanim">
                        <img src='./img/PainPoint_4.png'/>
                        <div className='ppswiperboxdown'>
                            <span className='ppfirsttitle'>詞彙太多易混淆</span><br/>
                            <span className='ppsectitle'>同義字、反義字、相近字一起出現意思全部都搞混</span>
                        </div>
                    </div>

                    <div className="item swiper ppswiperboxanim">
                        <img src='./img/PainPoint_5.png'/>
                        <div className='ppswiperboxdown'>
                            <span className='ppfirsttitle'>背單字沒有完整系統</span><br/>
                            <span className='ppsectitle'>手寫筆記一大堆重點亂七八糟</span>
                        </div>
                    </div>
                </div>
            </div>  

        </div>
        
        ,
        document.getElementById('painpoint'));
    

})();