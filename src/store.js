import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    lunbotu: [
      'https://dn-simplecloud.shiyanlou.com/course/1581128561517_2020%E5%85%83%E5%AE%B5banner-%E6%B4%BB%E5%8A%A8%E4%B8%AD-F8414D.png',
      'https://dn-simplecloud.shiyanlou.com/course/1581147433848_%E9%AB%98%E6%A0%A1-pc.png',
      'https://dn-simplecloud.shiyanlou.com/course/1581147496463_%E8%BF%90%E7%BB%B4(1).png',
      'https://dn-simplecloud.shiyanlou.com/course/1580691282087_30%E5%A4%A9%E7%99%BE%E6%A5%BC%E6%8C%91%E6%88%98banner.png'
    ],
    menuData: [
      {
        title: ['后端开发', 'Python', 'PHP'],
        menu: ['Python', 'PHP', 'Java', 'Ruby', 'Laravel', 'C', 'C++', 'Go', 'Flask', 'OpenCV', 'ThinkPHP', '爬虫', 'Django', 'Spring', 'SSM', 'Node.js', 'Rust', 'Nginx', 'MongoDB', 'Micronaut'],
        class: ['Python 新手入门课', 'Java 编程语言基础', 'Diango 基础教程', 'Python3 实现简单的 Web 服务器']
      },
      {
        title: ['Linux 运维', 'Linux', 'Shell'],
        menu: ['Linux', 'Shell', '网络', 'Nginx', 'Ansible', 'Git'],
        class: ['Linux 基础入门（新版）', '高级 bash 脚本编程指南', 'Git 与 GitHub 入门实践', 'Kubernets 入门实战']
      },
      {
        title: ['云计算与大数据', 'Hadoop', 'Spark'],
        menu: ['Hadoop', 'Spark', 'Scala', 'Docker', '机器学习', 'SDN', 'Hbase', 'Hive', 'Mahout', '云计算', '大数据', 'TensorFlow', '知识图谱', 'Kunbernetes', '数据分析'],
        class: ['机器学习开放基础课程', 'Kaggle 数据分析项目入门实战', '使用Flume 收集数据', '大数据带你挖掘打车的秘籍']
      },
      {
        title: ['数据库', 'SQL', 'NoSQL'],
        menu: ['SQL', 'NoSQL', 'MongoDB', 'MySQL', 'Redis', 'Neo4j', 'Oracle'],
        class: ['MySQL 基础课程', 'MongDB 基础教程', 'Python3 实现键值数据库', 'Spark SQL 入门到上手实战']
      },
      {
        title: ['信息安全', 'Web安全', '安全开发'],
        menu: ['Web安全', '安全开发', '网络安全', 'Kali', '加密解密', '系统安全', '渗透测试', '信息隐藏'],
        class: ['密钥加密实验', 'SQL 主入基础原理介绍', 'Python 实现端口扫描器', 'Linux 防火墙技术']
      },
      {
        title: ['Web 前端', 'HTML5', 'Web'],
        menu: ['HTML5', 'Web', 'HTML', 'Javascript', 'jQuery', 'Bootstrap', 'CSS', 'Node.js', 'Vue.js'],
        class: ['HTML', 'CSS 基础课程', 'JavaScript 基础课程', 'React 全家桶实现销售管理系统']
      },
      {
        title: ['计算机专业课', '新手入门', '算法'],
        menu: ['新手入门', '算法', '计算机专业课', '设计模式', '汇编'],
        class: ['数据结构（新版）', '操作系统原理与实践', 'TCP/IP 网络协议基础', 'C 语言入门教程']
      },
      {
        title: ['其他技术', 'Swift', 'Windows'],
        menu: ['Swift', 'Windows', 'Electron', 'Android', 'R', 'Julia'],
        class: ['R 语言基础入门', '基础R的高级数据管理', '对英国房屋价格建模并预测', '使用 GitHub 实现团队 Coding Review 流程']
      }
    ],
    staticList: [
      {
        img: 'https://dn-simplecloud.shiyanlou.com/course/1545727530595_%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90%E4%B8%8E%E6%8C%96%E6%8E%98.png',
        content: '6周成为数据分析与挖掘工程师',
        foot: '最近班次： 3月5日'
      },
      {
        img: 'https://dn-simplecloud.shiyanlou.com/course/1552548895361_%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_15525486676209.png',
        content: '11周从0基础到Linux运维工程师',
        foot: '最近班次： 2月18日'
      },
      {
        img: 'https://dn-simplecloud.shiyanlou.com/course/1565168718677_%E6%A5%BC%E2%80%94%E2%80%94%E9%A6%96%E9%A1%B5.png',
        content: '6周成为深度学习工程师',
        foot: '最近班次： 3月16日'
      },
      {
        img: 'https://dn-simplecloud.shiyanlou.com/course/1552548866160_%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_15525486809695.png',
        content: '11周成为Python初级工程师',
        foot: '最近班次： 3月12日'
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
