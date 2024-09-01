import Screen from "./components/Screen";
import Wrapper from "./components/Wrapper";
import ButtonBox from "./components/ButtonBox"
import Button from "./components/Button"
import CalculatorProvider from "./context/CalculatorProvider";

function App() {
  const signs = ["C","Del","%","/",7,8,9,"x",4,5,6,"-",1,2,3,"+",0,".","="]

  return (
    <CalculatorProvider>
      <Wrapper>
        <Screen>

        </Screen>

        <ButtonBox>
          {signs.map((btn,i) =>
              (
              <Button key={i} value={btn}></Button>
              )
            )}
        </ButtonBox>
      </Wrapper>
    </CalculatorProvider>
  );
}

export default App;
