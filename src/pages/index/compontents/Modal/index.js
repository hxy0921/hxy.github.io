import { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Text, Input, Image, Textarea } from '@tarojs/components';
import offIcon from '../../../../assets/img/off.png'
import pic from '../../../../assets/img/pic.png';

import './index.styl'
export default class Index extends Component {

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

  render () {
    return (
      <View className="mask">
        <View className='modal'>
          <View className="modalTitle">上传表情包</View>
          <View className="updatePic" onClick={this.toUpload}>
              <Image src={pic} className="btnPic"/>
          </View>
          <View className="faceData">
            <Input placeholder="名称" className="faceName"/>
            <Textarea placeholder="备注" className="faceDesc"/>
          </View>
          <View className="pushSubmit">提交</View>
        </View>
        <Image src={offIcon} className="offBtn" onClick={this.props.hideModal}/>
      </View>
      
    )
  }
}
