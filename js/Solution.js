(function(){
    'use strict';

    const data=[
        {
            'titlenum':'01',
            'titlename':'好科學最懂大腦',
            'content':'比你大腦還懂你的「互動式單字記憶系統」，透過A.I.人工智慧，擺脫背了又忘、忘了再背的痛苦輪迴。',
            'imagesrc':'./img/Solution_img_1.gif'
        },
        {
            'titlenum':'02',
            'titlename':'好深入記憶期長',
            'content':'根據德國心理學家艾賓浩斯研究，「互動式單字記憶系統」獨家設計出「預習→複習→再複習」的循環學習步驟，只要按著步驟一步一步做，就能減緩記憶遺忘的速度，不再看過就忘，讓你把單字記得長長久久。',
            'imagesrc':'./img/Solution_img_2.png'
        },
        {
            'titlenum':'03',
            'titlename':'好有效絕對記住',
            'content':'背單字最怕背不下去、背了又忘，「互動式單字記憶系統」是最瞭解你大腦的學習系統，不僅結合「教育心理學」及「測驗心理學」，以最符合大腦慣性的方式反覆複習，讓你記得住、看得下去、背得起來。',
            'imagesrc':'./img/Solution_img_3.gif'
        },
        {
            'titlenum':'04',
            'titlename':'好紀錄個人分析',
            'content':'人是從失敗中學習的動物，透過「個人分析」能隨時進行自我檢測，當然就能提升學習成效。',
            'imagesrc':'./img/Solution_img_4.gif'
        },
        {
            'titlenum':'05',
            'titlename':'好自由自建單字',
            'content':'製作專屬的單字列表，搭配內建錄音功能連聲音都為自己量身訂做，強化記憶的就靠這，別以為不是書就不能隨手做筆記。每個單字都可立即做「數位筆記」，事半功倍，效果加倍。',
            'imagesrc':'./img/Solution_img_5.png'
        },
        {
            'titlenum':'06',
            'titlename':'好豐富多種考試',
            'content':'針對不同考試的單字隨點隨聽，一機在手掌絕對是準備考試高分的關鍵，單字懂得愈多，考高分機會就愈高。',
            'imagesrc':'./img/Solution_img_6.png'
        },
        {
            'titlenum':'07',
            'titlename':'好入手免費下載',
            'content':'只要一個動作就能就能輕鬆擁有最懂大腦的「最懂大腦的，互動式單字記憶系統」，這次絕對讓你記起來。',
            'imagesrc':'./img/Solution_img_7.png'
        },
        {
            'titlenum':'08',
            'titlename':'好方便離線可用',
            'content':'離線也可使用，不用再拿著厚重單字書邊看邊聽音檔，背單字不再被時間地點所限制，走哪背到哪。',
            'imagesrc':'./img/Solution_img_8.png'
        }
    ]

    class SolutionIntroItem extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                num: 0,
                mode:[true,false,false,false,false,false,false,false]
            };
        }

        contentdetect(e){
            var newarray = [false,false,false,false,false,false,false,false];
            newarray[e] = true;
            this.setState(state => ({
                num : e,
                mode:newarray
              }));
        }

        render(){
            return(
                <div className='solutionintrobox'>
                    <div className='solutionintro'>
                        <span className='solutionintrotitle_en'>{data[this.state.num].titlenum}</span>
                        <span> </span>
                        <span className='solutionintrotitle'>{data[this.state.num].titlename}</span><br/>

                        <img src={data[this.state.num].imagesrc}/><br/>

                        <div className='solutionintrotext'>
                            <span>{data[this.state.num].content}</span>
                        </div>

                        
                    </div>

                        <div className='solutionbtnbox'>
                            <div className='solutionbtn animdelay1'>
                                <img src={this.state.mode[0] ? './img/Solution_bt_1_h.png' : './img/Solution_bt_1.png'} onClick={()=>this.contentdetect(0)}/>
                            </div>

                            <div className='solutionbtn animdelay2'>
                                <img src={this.state.mode[1] ? './img/Solution_bt_2_h.png' : './img/Solution_bt_2.png'} onClick={()=>this.contentdetect(1)}/>
                            </div>

                            <div className='solutionbtn animdelay3'>
                                <img src={this.state.mode[2] ? './img/Solution_bt_3_h.png' : './img/Solution_bt_3.png'} onClick={()=>this.contentdetect(2)}/>
                            </div>

                            <div className='solutionbtn animdelay4'>
                                <img src={this.state.mode[3] ? './img/Solution_bt_4_h.png' : './img/Solution_bt_4.png'} onClick={()=>this.contentdetect(3)}/>
                            </div>

                            <div className='solutionbtn animdelay5'>
                                <img src={this.state.mode[4] ? './img/Solution_bt_5_h.png' : './img/Solution_bt_5.png'} onClick={()=>this.contentdetect(4)}/>
                            </div>

                            <div className='solutionbtn animdelay6'>
                                <img src={this.state.mode[5] ? './img/Solution_bt_6_h.png' : './img/Solution_bt_6.png'} onClick={()=>this.contentdetect(5)}/>
                            </div>

                            <div className='solutionbtn animdelay7'>
                                <img src={this.state.mode[6] ? './img/Solution_bt_7_h.png' : './img/Solution_bt_7.png'} onClick={()=>this.contentdetect(6)}/>
                            </div>

                            <div className='solutionbtn animdelay8'>
                                <img src={this.state.mode[7] ? './img/Solution_bt_8_h.png' : './img/Solution_bt_8.png'} onClick={()=>this.contentdetect(7)}/>
                            </div>
            

                        </div>
                        </div>
                    
            )
        }
    }
    

    ReactDOM.render(
        <div className='solutionbg'>
            <div className='solutionbox'>
                <div className='solutionanim'>
                    <span className='firsttitle'>解決學習路上的</span><br/>
                    <span className='sectitle'>疑難雜症</span><br/>
                </div>
                <img className='solutiondecimg' src='./img/Solution_1.png'/>

                <SolutionIntroItem/>
              
            </div>

            


        </div>
        ,
        document.getElementById('solution'));
    

})();