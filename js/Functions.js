(function(){
    'use strict';

    function scrolltodiv(e){
        $('html,body').animate({
            scrollTop: $(e).offset().top
        }, 0);
        
    }


    ReactDOM.render(
        <div>
            <div className='functionbgbox'>
                <div className='functionbg'></div>
                <img class="functionbgimg" src="./img/Function_bg.png"/>

            </div>
  
            <div className='functitlebox'>
                <div className='functitleanim'>
                    <span className='sectitle'>三大功能任你選</span><br/>
                    <span className='firsttitle funcfirsttitle'>選擇最適合自己的學習利器</span><br/>
                </div>
                <div className='funcbtnbox'>
                    <div className='funcbtn animdelay2' onClick={()=>scrolltodiv('#funcintro1')}>
                        <span>間隔測驗學習法</span>   
                    </div>

                    <div className='funcbtn animdelay5' onClick={()=>scrolltodiv('#funcintro2')}>
                        <span>圖像式學習法</span>   
                    </div>

                    <div className='funcbtn animdelay8' onClick={()=>scrolltodiv('#funcintro3')}>
                        <span>分散學習法</span>   
                    </div>
                    
                </div>


                <div id='funcintro1' className='funcintrobox'>
                    <div className='funcintroimg'>
                        <img src='./img/Function_phone_1.gif'/>
                    </div>

                    <div className='funcintroitem'>
                        <span className='funcintrotitle funcintrotitle_h'>間隔測驗學習法</span><br/>
                        <span className='funcintrosectitle funcintrosectitle_h'>互動式單字表</span><br/>
                        <div className='funcintrcontent'>
                            <span>「中英文互動式字表」可同時顯示中英文，也可只顯示中文或英文，方便讀者邊背單字邊自我檢測。再也不用像傳統單字書還要用手或遮色片來遮遮掩掩。</span><br/><br/>
                            <span>「中英文互動式字表」是利用視覺暫留的原理，就像將單字刻在視網膜上，並由視神經輸入大腦的長期記記憶區，想忘都忘不掉。</span><br/><br/>
                            <span>人是從失敗中學習的動物，而「中英文互動式字表」能隨時進行自我檢測，當然就能提升學習成效。</span>
                        </div>
                    </div>

                </div>

                <div id='funcintro2' className='funcintrobox'>
                    <div className='funcintroimg'>
                        <img src='./img/Function_phone_2.gif'/>
                    </div>

                    <div className='funcintroitem'>
                        <span className='funcintrotitle'>圖像式學習法</span><br/>
                        <span className='funcintrosectitle'>滑字卡背單字</span><br/>
                        <div className='funcintrcontent'>
                            <span>「滑字卡背單字」是利用手指左右輕輕滑動，讓觸覺刺激皮質層在關鍵學習點觸發，協助大腦運行邏輯組塊，有效率建立認知！</span><br/><br/>
                            <span>左滑右滑的小動作卻能同時啟動左右腦邏輯思考及記憶細胞，強烈視覺從右腦輸入，輔助聽覺從左腦輸入，雙管齊下，神奇到連自己都嚇一跳。</span><br/><br/>
                            <span>邊滑字卡不僅可以邊背單字，同時也可以做測驗，利用錯誤來加深記憶。</span>
                        </div>
                    </div>

                </div>

            </div>   

            <div className='functionbgboxbot'>
                <img class="functionbgimgbot" src="./img/Function_bottom_bg.png"/>
                <div className='functionbgbot'></div>
                

            </div>
  
            <div className='functitlebox'>
                
                
                <div id='funcintro3' className='funcintrobox'>
                
                    <div className='funcintroimg'>
                        <img src='./img/Function_phone_3.gif'/>
                    </div>

                    <div className='funcintroitem'>
                        <span className='funcintrotitle funcintrotitle_l'>分散學習法</span><br/>
                        <span className='funcintrosectitle funcintrosectitle_l'>利用單字解析背單字</span><br/>
                        <div className='funcintrcontent funcintrcontent_l'>
                            <span>每個單字均附「單字解析」。依每個單字的特性及考試重點，隨機補充單字重點、必考文法、衍生字、同義字、會話句等，你只要看一次就能學全部，超級有效率。</span><br/><br/>
                            <span>學語言一定要聽得懂、唸得出來。本系統邊聽邊看保證提升單字理解力，你也能豪邁地踏進高分名人堂，成為下一個考試怪物！</span><br/><br/>
                            <span>別以為不是書就不能隨手做筆記。本系統在「單字解析」中，每個單字都可立即做「數位筆記」，事半功倍，效果加倍。</span>
                        </div>
                    </div>

                </div>
                
            </div>

            

        </div>
        ,
        document.getElementById('functions'));
    

})();