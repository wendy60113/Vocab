(function(){
    'use strict';

    ReactDOM.render(
        <div className='exambg'>
            <div className='exambox'>
                <div className='examtitleanim'>
                    <span className='firsttitle'>把常忘的單字</span><br/>
                    <span className='sectitle'>一次放進腦海中</span><br/>
                </div>
                

                <div className='decbox'>
                    <div className='examdeccontent'>
                        <span>聽、說、讀、寫</span><br className='decbr'/><span className='dechightext'> 一次滿足！</span>
                    </div>

                    <div className='decline'></div>

                    <span className='examcontent'>背單字最怕背不下去、背了又忘。最瞭解你大腦的學習系統，不僅結合「教育心理學」及「測驗心理學」，以最符合大腦慣性的方式反覆複習，讓你記得住、看得下去、背得起來。</span>

                </div>

            </div>

            <div className='phonebox_l'>
                <div className='phoneinbox phone_3 animdelay3'>
                    <img className='phone shadowleft' src='./img/Exam_phone3.png'/>
                    <span className='phone_decword'>聽力</span>
                    
                </div>

                <div className='phoneinbox phone_2'>
                    <img className='phone shadowleft' src='./img/Exam_phone2.png'/>
                    <span className='phone_decword'>字義</span>
                    
                </div>

                <div className='phoneinbox phone_5 animdelay3'>
                    <img className='phone shadowright' src='./img/Exam_phone5.png'/>
                    <span className='phone_decword'>克漏字</span>
                    
                </div>

                <div className='phoneinbox phone_4'>
                    <img className='phone shadowright' src='./img/Exam_phone4.png'/>
                    <span className='phone_decword'>拼字</span>
                    
                </div>

                <img className='phone_1' src='./img/Exam_phone0_1.png'/>
                
            </div>

            <div className='phonebox_s'>
            
                <div className="exam_slider owl-carousel owl-theme">
                
                    <div className="item">
                        
                        <img src='./img/Exam_phone0_1.png'/>
                        

                    </div>
                    <div className="item">
                        <img src='./img/Exam_phone0_2.png'/>
                        <span className='phone_decword'>字義</span>

                    </div>
                    <div className="item">
                        <img src='./img/Exam_phone0_3.png'/>
                        <span className='phone_decword'>聽力</span>

                    </div>
                    <div className="item">
                        <img src='./img/Exam_phone0_4.png'/>
                        <span className='phone_decword'>拼字</span>

                    </div>
                    <div className="item">
                        <img src='./img/Exam_phone0_5.png'/>
                        <span className='phone_decword'>克漏字</span>

                    </div>
                </div>

            </div>
            
        </div>
        ,
        document.getElementById('exam'));
    

})();