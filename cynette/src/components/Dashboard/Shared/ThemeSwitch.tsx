import sun from '../../../assets/icons8-sun-80.png'
import moon from '../../../assets/icons8-moon-80.png'
const ThemeSwitch = (prop: {value: string}) => {
  return (
    <div className={`${prop.value ? 'switch' : 'switch' } drop-shadow-md  rounded-md p-2  shadow-md`}>
        {prop.value === 'light' ? <img src={moon} alt="theme icon" height={24} width={24}/> : <img src={sun} alt="theme icon" height={24} width={24}/>}
    </div>
  )
}

export default ThemeSwitch