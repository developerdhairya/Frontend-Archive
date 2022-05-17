import RectangularButton from '../components/Buttons/RectangularButton';

const LoginPageHeader = () => {
    return  <header class="text-gray-600 body-font">
    <div class="container mx-auto flex justify-between flex-wrap flex-col md:flex-row items-center p-20">
        <div class="flex flex-row justify-evenly items-center h-20">
        <img class="object-scale-down" src="./logo.png" alt="."/>
        </div>
      <div class=" grid grid-cols-2 gap-4">
        <RectangularButton text="Sign Up" route="/register"/>
      </div>
    </div>
  </header>
}
 
export default LoginPageHeader;