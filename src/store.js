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
    ],
    dycList: {
      f1: [
        {
          img: 'https://dn-simplecloud.shiyanlou.com/course/1542593215523_%E3%80%90614%E3%80%91-%E3%80%90Python%E5%AE%9E%E7%8E%B0%E9%94%AE%E5%80%BC%E6%95%B0%E6%8D%AE%E5%BA%93%E3%80%91.png',
          content: 'Python3 实现键值数据库',
          text: ' 本课程将通过理解一个操作类似于 Redis，存储理念来自于 CouchDB 的键值数据库的源代码来学习如何做数据库的数据存储，体会使用不可变数据结构的优点。',
          number: 5874,
          color: 'green',
          paic: '免费'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/course/1539678114813_[1166]-[C++-%E5%AE%9E%E7%8E%B0-STL-%E5%BA%93%E7%9A%84%E7%BB%84%E4%BB%B6%E5%92%8C%E7%AE%97%E6%B3%95].jpg',
          content: 'C++ 实现 STL 标准库和算法',
          text: ' 本课程主要讲解了C++ STL的容器和算法的实现，通过本课程可以快速掌握顺序容器vector、list 和 deque 以及关联容器 set 和 map 等，更有迭代器和算法的讲解。 ',
          number: 3263,
          color: 'green',
          paic: '免费'
        }
      ],
      f2: [
        {
          img: 'https://dn-simplecloud.shiyanlou.com/courses/uid214893-20191014-1571044901528',
          content: ' TensorFlow 2 深度学习入门与实践',
          text: ' TensorFlow 是由谷歌在 2015 年 11 月发布的深度学习开源工具，我们可以用它来快速构建深度神经网络，并训练深度学习模型。2019 年，TensorFlow 正式推出了 2.0 版本，也意味着 TensorFlow 从 1.x 正式过度到 2.x 时代。 ',
          number: 229,
          color: 'red',
          paic: '训练营'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/1470631844655.png',
          content: ' C++ 开发 Web 服务框架 ',
          text: ' 服务器开发中 Web 服务是一个基本的代码单元，将服务端的请求和响应部分的逻辑抽象出来形成框架，能够做到最高级别的框架级代码复用。本次项目将综合使用 C++11 及 Boost 中的 Asio 实现 HTTP 和 HTTPS 的服务器框架。 ',
          number: 4342,
          color: 'yellow',
          paic: '会员'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/courses/uid770606-20191205-1575541847039',
          content: ' Spring Cloud 与 Docker 实战',
          text: ' 本课程主要讲解如何通过实验的方式实战 Spring Boot/Cloud 并结合 Docker 使用。课程包含了服务注册于发现中心 Eureka，Spring Boot Actuator 监控端点，Ribbon 客户端负载均衡，Feign 声明式 REST 调用，Docker Compose 的基本使用等知识点，最后通过 Dcoker Compose 介绍了接近实际开发的两个例子。 ',
          number: 208,
          color: 'red',
          paic: '训练营'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/1517283041138.png',
          content: ' 使用 Python 实现深度神经网络 ',
          text: ' 人工智能是目前比较火热的关键词之一，而神经网络可以看做是人工智能的一种具体实现方法。本课程将手把手教你使用 Python 实现一个深度神经网络，让你在实际动手的过程中理解深度学习的一些基本原理，带你真正入门深度学习。 ',
          number: 4280,
          color: 'yellow',
          paic: '会员'
        }
      ]
    }
  },
  mutations: {

  },
  actions: {

  }
})
