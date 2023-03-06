import logo from './logo.svg';
import './App.css';
import { WomanOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import cfywechatimg from './img/cfy-wechat.png';
import qyqyimg from './img/qyqy.png';

function App() {
  const degreeList = [
    {
      uniName: '悉尼大学',
      majorName: '计算机科学与技术',
      year: '2021/07 - 2023/04',
      degree: '硕士',
    },
    {
      uniName: '悉尼科技大学',
      majorName: '计算机科学与技术',
      year: '2017/03 - 2020/03',
      degree: '本科',
    }
  ];
  
  const workList = [
    {
      companyName: '浙江扁鹊健康科技有限公司',
      tag: '实习',
      year: '2022/09 - 至今',
      job: '前端开发实习生',
      content: '1. 参与互联网医院平台类产品的前端代码开发及维护等相关工作，配合产品经理、UI设计师及后端开发工程师完成应用开发；\n2. 参与前端公共组件库搭建，对项目进行组件化改进；\n3. 协助测试工程师定位问题，修复前端Bug；',
    },
    // {
    //   companyName: '北京外企德科人力资源服务上海有限公司',
    //   tag: '全职',
    //   year: '2021/04-2022/01',
    //   job: 'Web前端开发工程师',
    //   content: '参与开发和维护华为产品iMaster NCE-Super的前端页面。\n1. 根据产品需求和原型，对前端功能模块进行迭代开发和维护，与后端团队合作实现页面交互效果；\n2. 编写开发文档；\n3. 协助测试工程师制定测试计划，定位并解决前端问题；',
    // },    
  ];

  const projectList = [
    {
      projectName: '重医一院互联网医院',
      companyName: '',
      year: '2022/10 - 至今',
      job: '前端开发',
      content: '重庆医科大学附属第一医院PC端后台管理系统以及微信小程序患者端和医护端。',
      do: '1. 负责后台系统的医生排班和运营活动管理的需求开发, 封装公共组件；\n2. 负责微信小程序患者端的线上挂号问诊的需求开发；\n3.  负责微信小程序医护端的医生开方以及药师审方的功能实现；',
      technology: '采用技术：uni-app、umi、dva；',
      // difficulties: '1.封装公共组件； 2.封装websocket实现即时通讯；',
      codeName: '重医一院互联网医院患者端二维码',
      imgUrl: cfywechatimg,
    },
    {
      projectName: '鹊有其药(支付宝小程序/H5）',
      companyName: '',
      year: '2022/10 - 2023/01',
      job: '前端开发',
      content: '该项目向患者提供厚普医药的新药试验招募信息。患者可选择与自身条件相符的试验项目进行报名，并在报名记录中查看自己的报名进度。',
      do: '1. 负责首页、报名表、报名记录模块的开发；\n2. 负责对接第三方免登录报名；\n3. 负责前端埋点收集用户行为数据， 负责前端埋点收集用户行为数据，编写埋点批量上报脚本提⾼埋点登记的效率和准确率；',
      technology: '采用技术：Taro；',
      // difficulties: '1.编写脚本批量上报前端埋点，完善埋点平台的删除和编辑功能；',
      codeName: '鹊有其药支付宝小程序二维码',
      imgUrl: qyqyimg,     
    },
    {
      projectName: '在校项目-Sellphones电子商务网站',
      companyName: '',
      year: '2022/04 - 2022/05',
      job: '开发组成员',
      content: '用于销售手机的电子商务网站。',
      do: '负责开发登录注册、首页、搜索商品页、商品详情页、购物车和个人中心六个主要模块。',
      technology: '采用技术：React、Express、MongoDB；',
      difficulties: '',
      projectAddress: 'http://www.sarahwang766.com.cn/',
      codeName: '',
      imgUrl: '',     
    }
  ]
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='main-container'>
      <div className='cv-box'>
        <div className='content-wrap'>
          <section className="Intro">
            <div className="avatar"></div>
            <div className="name-cared-container">
              <div className='name-phone-mail'>
                <h1 className='name'>王潇晗</h1>
                <div className='phone-mail'>
                  <PhoneOutlined className='s-icon'></PhoneOutlined>
                  <span className='info-1'>17784682091</span>
                  <MailOutlined className='s-icon'/>
                  <span className='info-1'>727379867@qq.com</span>
                </div>
              </div>
              <div className='year-bd-degree'>
                <span>2023年应届生</span>
                <Divider type='vertical' className='divider-1'></Divider>
                {/* <span>1年工作经验</span>
                <Divider type='vertical' className='divider-1'></Divider> */}
                <span>1998/11/05</span>
                <Divider type='vertical' className='divider-1'></Divider>
                <span>硕士</span>
                <Divider type='vertical' className='divider-1'></Divider>
                <span>前端开发</span>
              </div>
            </div>
          </section>
          <section className='section-box'>
            <p className='title'> <Divider className='title-before' type='vertical' />个人能力</p>
            <div className='content-text'>
              <div className='info-text skill'>1. 熟悉使用React和Vue前端框架进行模块开发;</div>
              <div className='info-text skill'>2. 熟悉使用HTML/CSS/JavaScript/TypeScript完成页面制作;</div>
              <div className='info-text skill'>3. 了解使用Node.js搭建本地服务器;</div>
              <div className='info-text skill'>4. 了解使用Echarts生成数据可视化图表;</div>
              <div className='info-text skill'>5. 了解前端管理和构建工具：git、npm、webpack;</div>
            </div>
          </section>
          <section className='section-box'>
            <p className='title'> <Divider className='title-before' type='vertical' />教育经历</p>
            <ul>
              {degreeList.map(item => (
                <li className='content-text' >
                <div className='primary-info'>
                  <div className='info-text'>
                    <span style={{fontWeight: 600, marginRight: '30px'}}>{item.uniName}</span>
                    <span>{item.degree}</span>
                    <Divider type='vertical' className='divider-1' />
                    <span>{item.majorName}</span>
                    <span className='period'>{item.year}</span>
                  </div>
                </div>
              </li>
              ))}
            </ul>
          </section>
          <section className='section-box'>
            <p className='title'> <Divider className='title-before' type='vertical' />实习经历</p>
            <ul>
              {workList.map(item => (
                <li>
                  <div className='content-text'>
                    <div className='info-text'>
                      <span style={{fontWeight: 600, marginRight: '30px'}}>{item.companyName}</span>
                      <span>{item.job}</span>
                      <span className='period'>{item.year}</span>
                    </div>
                    <div className='info-text'>
                      {/* <p style={{lineHeight: '25px'}}>{item.content}</p> */}
                      {item.content.split('\n').map(ele => (
                          <div className='info-text'>{ele}</div>
                        ))
                      }
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section className='section-box'>
            <p className='title'> <Divider className='title-before' type='vertical' />项目经验</p>
            <ul>
              {
                projectList.map(item => (
                  <li>
                    <div className='content-text project-list'>
                      <div className='project-content'>
                        <div className='info-text'>
                          <span style={{fontWeight: 600, marginRight: '30px'}}>{item.projectName}</span>
                          <span>{item.job}</span>
                          <span className='period'>{item.year}</span>
                        </div>
                        {item.companyName &&
                          <div className='info-text'>
                            <span>所属公司：{item.companyName}</span>
                          </div>
                        }
                        <div className='info-text'>
                          <p className='s-title'>项目描述：</p>
                          <p>{item.content}</p>
                        </div>
                        <div className='info-text'>
                          <p className='s-title'>项目职责：</p>
                          <p>{item.do}</p>
                        </div>
                        <div className='info-text'>
                          <p>{item.technology}</p>
                        </div>
                        {item.difficulties &&
                          <div className='info-text'>
                            <p className='s-title'>项目难点：</p>
                            <p>{item.difficulties}</p>
                          </div>                      
                        }
                        {item.projectAddress && 
                          <div className='info-text'>
                            <p>项目链接：</p>
                            <p>{item.projectAddress}</p>
                          </div>
                        }
                      </div>
                      <div className='code-area'>
                        {item.codeName &&
                          <div className='info-text code'>
                            <p className='codeName'>{item.codeName}: </p>
                            <img src={item.imgUrl} style={{width: '100px', height: '100px'}}/>
                          </div>
                        }
                      </div>
                    </div>
                  </li>
                ))
              }
            </ul>
          </section>
          <section className='section-box'>
            <p className='title'> <Divider className='title-before' type='vertical' />性格特点</p>
            <div className='content-text'>
              <div>性格活泼开朗，具有良好的团队合作精神和沟通协作能力，在工作中善于总结反省，责任意识和抗压能力强。</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
