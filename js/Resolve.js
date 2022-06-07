(function(){
    'use strict';


    ReactDOM.render(
        <div>
            <div className='resolvebgbox'>
                <div className='resolvebg'></div>
                <img class="resolvebgimg" src="./img/Function_bg.png"/>
            </div>

            <div className='resolvebox'>
                <div className='resolvetitlebox'>
                    <span className='sectitle'>了解問題</span><br/>
                    <span className='firsttitle'>比了解錯誤更重要</span>
                    
                </div>

                <div className='resolvecontent'>
                    <span>試後分析協助你了解自己對單字各項理解程度，針對弱點分析、加強練習。比你大腦還懂你的「互動式單字記憶系統」，透過A.I.人工智慧，擺脫背了又忘、忘了再背的痛苦輪迴。</span>
                </div>

                <div className='resolveimg'>
                    <img className='mainphone' src='./img/Resolve_phone.png'/>
                    <img className='introleft' src='./img/Resolve_left.png'/>
                    <img className='introright' src='./img/Resolve_right.png'/>
                </div>

            </div>
            

        </div>
        ,
        document.getElementById('resolve'));
    

})();