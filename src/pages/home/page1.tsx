import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BrickButton } from 'tuya-panel-kit';

function Page1() {
  const route = useRoute();
  console.log('[navigation]params', route.params);

  const navigation = useNavigation<StackNavigationProp<any, any>>();
  return (
    <BrickButton
      text="Page1"
      onPress={() => {
        navigation.push('page2');
      }}
    />
  );
}
 // const [weekdays, setWeekdays] = useState('1111111');
  // const [number, setNumber] = useState('8');
  // const [hour, setHour] = useState('16');
  // const [minute, setMinute] = useState('30');
  // const [clicked, setClicked] = useState(true);
  // const meal_plan = (data: { weekdays: string; number: string; hour: string; minute: string; clicked: boolean }) => {
  //   const timeHex =  (parseInt(data.hour, 10) * 60 + parseInt(data.minute, 10)).toString(16).padStart(4, '0');//转化为分钟数然后转化16进制，不足四位不够四位数

  //   const numberHex = parseInt(data.number).toString(16).padStart(2,'0') //将数量转化为16进制并补足两位数
  
  //   const weekHex = parseInt(data.weekdays, 2).toString(16).padStart(2,'0') //将周期转化为16进制并补足两位数
  //   let swith = '01'
  //   if (data.clicked){
  //     swith = '01'
  //   } 

  //   const to_Mealplan = `${swith}${timeHex}${numberHex}${weekHex}`
  //   TYSdk.device.putDeviceData({ meal_plan: to_Mealplan });
  // };
  // const handleSave = () => {
  //   meal_plan({ weekdays, number, hour, minute, clicked });
  // };

export default Page1;
