(function(){
    'use strict';

    ReactDOM.render(
        <div>

            <div className='videobgboxbot'>
                <img class="videobgimgbot" src="./img/Video_bg.png"/>
                <div className='videobgbot'></div>
            </div>

            <div className='videobox'>
                <div className='videotitleanim'>
                    <span className='videodectitle'>還是不知道背背單字哪裡好嗎？</span><br/>
                    <span className='sectitle videotitle'>看影片<br className='videotitlebr'/>直接操作給你看</span><br/>
                </div>
                <div className='youtubebox'>
                <iframe 
                    src="https://www.youtube.com/embed/MmOyQGsT7ic" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen></iframe>

                </div>
            </div>



        </div>
        ,
        document.getElementById('video'));
    

})();