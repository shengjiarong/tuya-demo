import React, {useState} from 'react';
import { View } from 'react-native';
import { TYSdk,  BrickButton, Stepper,Button, Popup,Checkbox,Utils} from 'tuya-panel-kit';
import { useNavigation } from '@react-navigation/native';
//涂鸦api


/**
 * 这个是设备进来后的主页
 * 投喂
 * @returns 
 */
const Home: React.FC = () => {
  const navigation = useNavigation();
  const data = [
    { text: 'page1', path: 'page1' },
    { text: 'page3', path: 'page3' },
  ];

  const [clicker,setClicker] = useState(false)
  const [hour, setHour] = useState('16');//定义小时
  const [minute, setMinute] = useState('30');//定义分钟

  const [feedvalue, setFeedvalue] = useState('1'); //定义手动投喂的变量名，数量默认1
  const handleValueChange = (newvalue) =>{
    setFeedvalue(newvalue);
  } //手动投料的数量修改函数
  const feed = async () => {
    await TYSdk.device.putDeviceData({ manual_feed: feedvalue })
  }//手动投料的提交函数


  const [feedmode, setFeedmode] = useState({
    modetime: '12h',
    modevalue: '1',
     
  }); //定义自动投喂定时变量名，时间默认12小时,投料为1

  const [plan, setPlan] = useState({
    planclicker: clicker ? '01':'00',
    plantime:'',
    planvalue:'',
    planweekdays:'',
  }) //定义自定义定时计划的变量名,开关+时间+数量+周期，最后要组合成一个16进制数
  const [tomealplan, setTomealplan] = useState({})
  const [planv,setPlanv] = useState(['']) //测试多个计划
  const mealplan =  () =>{
    setPlanv([...planv, '01046A0c01','01047A0c01'])
    TYSdk.device.putDeviceData({ meal_plan: '01046A0c01'})
  }

  

  

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {data.map(({ text, path }) => {
        return (
          /**
           * 按钮
           */
          <BrickButton
            style={{ marginTop: 50 }}
            key={path}
            text={text}
            onPress={() => {
              mealplan();
              // navigation.navigate(path, { name: path });
            }}
          />
        );
      })}
      <View style={{ flexDirection: 'row' }} > //一个步进器选择投料数量，一个提交按钮执行投料
        <Stepper value={0} editable={true} onValueChange={handleValueChange} />
        <Button text="提交" onPress={() => feed()} />
      </View>
    </View>
  )
};
export default Home;
