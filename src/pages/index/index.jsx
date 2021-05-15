import { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Text, Input, Image } from '@tarojs/components';
// 通过import 导入的图片编译的时候才会把src目录下图片的文件夹 编译到 dist目录下
import uploadingSrc from '../../assets/img/uploading.png'
import Modal from './compontents/Modal';
import './index.styl'
const faceAll = [
  {
    src: 'https://img.kaikeba.com/a/75340141501202ddhk.jpeg',
    name: '爱情是最不靠谱的东西',
  },
  {
    src: 'https://img.kaikeba.com/a/41440141501202eklf.jpeg',
    name: '咦～',
  },
  {
    src: 'https://img.kaikeba.com/a/42511141501202nyqb.jpeg',
    name: '姐妹牛批',
  },
  {
    src: 'https://img.kaikeba.com/a/05511141501202meym.jpeg',
    name: '烦人精',
  },
  {
    src: 'https://img.kaikeba.com/a/01611141501202mgev.jpeg',
    name: '等我装完这个可爱就去收拾你',
  }
]
export default class Index extends Component {
  state = {
    uploadShow: false
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  toUpload = () => {
    Taro.chooseImage({
      success (res) {
        const tempFilePaths = res.tempFilePaths
        Taro.uploadFile({
          url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success (res){
            const data = res.data
            //do something
          }
        })
      }
    })
  }

  hideModal = () => {
    this.setState({uploadShow: false})
  }

  render () {
    let { uploadShow } = this.state;
    return (
      <View className='index'>
        <View className="search">
            <Input type='text' placeholder='搜索关键字 🔍' focus/>
        </View>
        <View className="faceList">
          {faceAll.map((item, index)=>{
            return(
              <View className="face" key={index}>
                  <Image src={item.src} mode="aspectFit"/>
                  <Text>{item.name}</Text>
              </View>
            )
          })}
        </View>
        <View className="uploadingBtn">
          <Image src={uploadingSrc} onClick={()=>{
            this.setState({uploadShow: true})
          }}/>
        </View>
        {uploadShow ? <Modal hideModal={this.hideModal}/> : null}
      </View>
    )
  }
}
