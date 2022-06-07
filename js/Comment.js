(function(){
    'use strict';


    ReactDOM.render(
        <div className='commentbg'>
            <div className='commentbox'>
                <div className='commenttitleanim'>
                    <span className='sectitle'>使用者分享</span><br/>
                </div>
                <div className="comment_slider owl-carousel  owl-theme">
                
                    <div className="item swiper commentitemanim">
                        <img src='./img/Comment_1.png'/><br/>
                    
                        <div className='comment_textbox'>
                            <div style={{textAlign:'center'}}>
                                <span className='cfirsttitle'>上班族/ 32 / 陳小姐</span><br/><br/>
                            </div>
                            <span className='csectitle'>工作要求必須要去考多益，這陣子用了好幾個學英文的程式，Youtor的功能是最多、也是最有效的。工作太忙，就每天背 20個單字然後做測驗，隔天用字卡看看有沒有忘記，然後第三天再利用智慧記憶的「智能血條」來確認錯比較多的單字，現在背完五關覺得蠻有效的，對沒時間記錄學習狀況的人來說真的很方便！</span>
                        </div>
                    </div>

                    <div className="item swiper commentitemanim animdelay2">
                        <img src='./img/Comment_2.png'/><br/>
                    
                        <div className='comment_textbox'>
                            <span className='cfirsttitle'>家庭主婦/ 58 / 王小姐</span><br/><br/>
                            <span className='csectitle'>退休後想用閒暇時間背單字，但年紀大了記憶力不像年輕人一樣好，一直找不到適合自己的工具，看到臉書廣告後想說來試試看Youtor，功能很多，使用上也很簡單，使用後也真的幫助我明確地知道自己的學習狀況，單字學習內容豐富，還有清楚的測驗功能，值得推薦給還找不到適合自己讀書方法的你。</span>
                        </div>
                    </div>

                    <div className="item swiper commentitemanim animdelay4">
                        <img src='./img/Comment_3.png'/><br/>
                    
                        <div className='comment_textbox'>
                            <div style={{textAlign:'center'}}>
                                <span className='cfirsttitle'>工程師/ 29 / 黃先生</span><br/><br/>
                            </div>
                            <span className='csectitle'>購買了一本懶鬼子英日語的日文書籍，想在疫情間把日文學好，書籍搭配了虛擬點讀筆因此下載了Youtor，剛好那時候遇上了特價活動，想說買來試試看，我個人有強迫症會要求自己每天將App的「智能血條」完成，就這樣持續用了一個多月，日文單字量明顯增加，是一個不錯的激勵學習法。</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        ,
        document.getElementById('comment'));
    

})();