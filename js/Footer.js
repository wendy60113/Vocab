(function(){
    'use strict';

    ReactDOM.render(
        <div>
            <div className='footerbox'>
                <div className="infobox">
                    <span className='infotext' onClick={()=> window.open('https://www.17buy.com.tw/books/', "_blank")}>我識官網</span>
                    <span className='infodec'>|</span>
                    <span className='infotext' onClick={()=> window.open('https://www.facebook.com/ImPublishing', "_blank")}>關於我們</span>
                    <span className='infodec'>|</span>
                    <span className='infotext' onClick={()=> window.open('https://m.me/105228222850483', "_blank")}>聯絡客服</span>
                    <span className='infodec'>|</span>
                    <span className='infotext' onClick={()=> window.open('https://www.17buy.com.tw/books/agreement_app.php', "_blank")}>服務條款</span>
                    
                </div>

                <div className='infoiconbox'>
                    <img src='./img/apple.png' onClick={()=> window.open('https://ppt.cc/frAChx', "_blank")}/>
                    <img src='./img/google.png' onClick={()=> window.open('https://ppt.cc/fUMspx', "_blank")}/>

                </div>

                
            </div>
            <div className="copyrightsection">
                <span>Copyright © 2022 我識出版教育集團 All rights reserved.</span>
            </div>
        </div>
        ,
        document.getElementById('footer'));
    

})();