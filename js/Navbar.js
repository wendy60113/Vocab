(function(){
    'use strict';

    ReactDOM.render(
        <div className='navbarbg'>
            <nav className="navbar navbar-expand-lg navbox">   
                {/*首頁*/} 
                <a href='https://www.17buy.com.tw/EDM/Youtor.html' className='navlogosvga'>
                    <svg className='navlogosvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.23 37.48">
                        <rect className="nc" width="37.48" height="37.48"/>
                        <path className="nb" d="M27.71,12.54c2.2,0,3.99-1.79,3.99-3.99s-1.79-3.99-3.99-3.99-3.99,1.79-3.99,3.99,1.79,3.99,3.99,3.99Z"/>
                        <path className="nb" d="M24.36,20.61c0,1.91-.56,3.51-1.62,4.62-1.05,1.09-2.54,1.67-4.32,1.67s-3.26-.58-4.3-1.66c-1.05-1.1-1.6-2.7-1.6-4.62V4.57H5.78V20.85c0,3.51,1.27,6.54,3.68,8.76,2.3,2.13,5.48,3.3,8.96,3.3s6.65-1.17,8.96-3.3c2.41-2.22,3.68-5.25,3.68-8.76v-5.98h-6.69v5.74Z"/>
                            <g>
                                <path className="nc" d="M137.12,22.75c0,7.28-5.12,10.53-10.16,10.53-5.57,0-9.92-3.82-9.92-10.2s4.27-10.49,10.24-10.49,9.84,4.15,9.84,10.16Zm-14.92,.2c0,3.82,1.91,6.71,4.92,6.71,2.85,0,4.84-2.76,4.84-6.79,0-3.09-1.38-6.67-4.8-6.67s-4.96,3.46-4.96,6.75Z"/>
                                <path className="nc" d="M81.04,22.75c0,7.28-5.12,10.53-10.16,10.53-5.57,0-9.92-3.82-9.92-10.2s4.27-10.49,10.24-10.49,9.84,4.15,9.84,10.16Zm-14.92,.2c0,3.82,1.91,6.71,4.92,6.71,2.85,0,4.84-2.76,4.84-6.79,0-3.09-1.38-6.67-4.8-6.67s-4.96,3.46-4.96,6.75Z"/>
                                <path className="nc" d="M111.54,7.66h-5.04v4.82h-2.87v3.83h2.87v9.53c0,2.66,.5,4.54,1.62,5.7,.96,1.04,2.5,1.66,4.41,1.66,1.58,0,2.95-.25,3.7-.54l-.08-3.87c-.58,.17-1.08,.21-2,.21-1.96,0-2.62-1.25-2.62-3.74v-8.95h4.87v-3.83h-4.87V7.66Z"/>
                                <path className="nc" d="M148.73,13.55c-1.69,0-3.47,.92-4.59,2.69v-3.76h-5v20.76h5v-9.74c.01-1.31,.52-2.45,.7-2.81,.82-1.32,2.2-2.44,3.57-2.63,.58-.08,1.38-.07,1.81-.02v-4.38c-.39-.08-1.03-.12-1.5-.12Z"/>
                                <path className="nc" d="M51.22,33.11v-11.73L42.33,4.99h5.88l3.34,7.22c.96,2.09,1.67,3.67,2.46,5.59h.08c.67-1.79,1.46-3.55,2.42-5.59l3.38-7.22h5.8l-9.35,16.27v11.85h-5.13Z"/>
                                <path className="nc" d="M96.45,12.4v12.27c0,.58-.08,1.17-.29,1.59-.5,1.34-1.84,2.75-3.92,2.75-2.71,0-3.8-2.17-3.8-5.55V12.4h-5.13v11.93c0,6.64,3.38,8.85,7.05,8.85s5.68-2.09,6.55-3.51h0v3.39h4.61V12.4h-5.08Z"/>
                            </g> 
                    </svg>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav navwidth1">
                        <li className="nav-item">
                            {/*VRP下載頁*/}
                            <a className="nav-link navcontent" href="http://www.17buy.com.tw/books/download_app">VRP虛擬點讀筆</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link navdeccontent">|</a>
                        </li>

                        <li className="nav-item">
                            {/*背背單字介紹頁*/}
                            <a className="nav-link navcontent" href="https://www.17buy.com.tw/EDM/Youtor_Vocab.html">最強背單字神器</a>
                        </li>  
                        
                        {/*
                        <li className="nav-item">
                            <a className="nav-link navdeccontent">|</a>
                        </li>
                         
                        <li className="nav-item">
                            {/*模擬試題介紹頁
                            <a className="nav-link navcontent" href="#">全方位線上測驗系統</a>
                        </li> 
                        */}
                    </ul>

                    <ul className="navbar-nav navwidth2">
                        <li className="nav-item fbli">
                            <a href="https://www.facebook.com/ImPublishing" target="_blank">
                                <svg className='navfbsvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.48 32.48">
                                    <clipPath id="fb">

                                        <circle class="fe" cx="16.24" cy="16.24" r="16.24"/>
                                    </clipPath>
                                    <g class="fd">
                                        <path class="fc" d="M27.31,15h-.24c-1.48,0-2.96,0-4.45,0-.13,0-.17-.04-.17-.17,0-1.12,0-2.24,.02-3.36,0-.23,.05-.47,.11-.69,.2-.72,.72-1.08,1.43-1.2,.33-.05,.67-.07,1-.07,.76-.01,1.52,0,2.29,0,.16,0,.2-.05,.2-.2,0-1.35,0-2.7,0-4.05,0-.16-.07-.2-.2-.21-1.33-.12-2.66-.2-3.99-.16-1.44,.05-2.78,.45-3.91,1.4-.98,.83-1.55,1.91-1.84,3.14-.16,.68-.21,1.38-.21,2.08,0,1.09,0,2.19,0,3.28,0,.15-.03,.21-.2,.21-1.28,0-2.56,0-3.84,0-.17,0-.2,.05-.2,.21,0,1.51,0,3.03,0,4.54,0,.17,.05,.2,.21,.2,1.28,0,2.56,0,3.84,0,.15,0,.2,.04,.2,.2,0,4.06,0,8.11,0,12.17,0,.15-.03,.2-.19,.2-5.1,0-10.2,0-15.31,0-.93,0-1.69-.65-1.82-1.49-.02-.12-.02-.24-.02-.37C0,21.05,0,11.46,0,1.86,0,.87,.7,.15,1.48,.03c.13-.02,.27-.02,.4-.02C11.46,0,21.05,0,30.64,0c1.03,0,1.73,.72,1.84,1.48,.02,.13,.02,.25,.02,.38,0,9.59,0,19.18,0,28.77,0,1-.69,1.72-1.49,1.84-.13,.02-.25,.02-.38,.02-2.66,0-5.32,0-7.98,0-.16,0-.21-.04-.21-.21,0-4.05,0-8.1,0-12.16,0-.15,.03-.21,.2-.21,1.27,0,2.55,0,3.82,0,.15,0,.21-.03,.23-.19,.08-.71,.18-1.42,.27-2.14,.09-.71,.18-1.41,.27-2.12,.02-.16,.04-.31,.06-.5Z"/>
                                    </g> 
                                </svg>
                            </a>
                        </li>

                        <li className="nav-item navbuybtnli">
                            <a href='https://www.17buy.com.tw/books/books.php?cid=11' className="nav-link navbuybtn" target="_blank">線上購買</a>
                        </li>

                    </ul>
                </div>
            </nav>
        
        </div>  
        ,
        document.getElementById('navbar'));
    

})();