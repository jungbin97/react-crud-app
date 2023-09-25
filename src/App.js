import React, { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import './App.css'
import ExpenseList from './components/ExpenseList'
import Alert from './components/Alert'

const App = () => {
  
  // 지출 항목
  const [charge, setCharge] = useState("");

  // 비용
  const [amount, setAmount] = useState(0);

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      charge: "렌트비",
      amount: 1600
    },
    {
      id: 2,
      charge: "교통비",
      amount: 400
    }
  ]);
  
  // Alert를 위한 State
  const [alert, setAlert] = useState({show: false});

  // edit 수정을 위한 State
  const [edit, setEdit] =useState(false);

  const [id, setId] = useState("");

  const handleEdit = (id) => {
    const expense = expenses.find(item => item.id === id);
    // 구조 분해
    const {charge, amount} = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  }

  const handleDelete = (id) => {
    const newExpenses = expenses.filter(expense =>
      expense.id !== id
    );
    setExpenses(newExpenses);
  };

  const handleCharge = e => {
    setCharge(e.target.value);
  };

  const handleAmount = e => {
    let amount = e.target.valueAsNumber;
    setAmount(amount);
  };

  const handleSumbit = e => {
    e.preventDefault();
    if (charge !== "" && amount > 0){
      if (edit){
        const newExpenses = expenses.map(item => {
          return item.id === id ? {...item, charge, amount} : item;
        });
        setExpenses(newExpenses);
        setEdit(false);
        handleAlert({type: "success", text: "아이템이 수정되었습니다."});
      }else{
        // id: 랜덤값 생성하는 메소드 인듯..?
        const newExpense = {id: crypto.randomUUID(), charge, amount};
        // expenses.push((newExpenses)); => 불변성 지키지 X
        const newExpenses = [...expenses, newExpense];  // 배열을 복사하고 새로운 newExpenses 배열을 만듬
        setExpenses(newExpenses);
      }
      setCharge("");
      setAmount(0);
      handleAlert({type: "success", text: "아이템이 생성되었습니다."});
    }else{
      console.log('error');
      handleAlert({type: "danger", text: "charge는 빈 값일 수도 있으며 amount 값은 0보다 커야 합니다."});
    }
  }
  
  const handleAlert = ({type, text}) => {
    setAlert({show: true, type, text});
    setTimeout(() => {
      setTimeout({show: false});
    }, 7000);
  };

  // 전체 지출항목 지우기
  const clearItems = () => {
    setExpenses([]);
  };


  return (
    <div>
      <main className='main-container'>
        {alert.show ? <Alert type={alert.type} text={alert.text}/> : null}
        <h1>예산 계산기</h1>

        <div style={{ width: '100%', background: 'white', padding: '1rem' }}>
          {/* ExpenseForm */}
          <ExpenseForm 
            charge = {charge}
            handleCharge = {handleCharge}
            amount = {amount}
            handleAmount = {handleAmount}
            handleSumbit= {handleSumbit}
            edit={edit}
          />
        </div>

        <div style={{ width: '100%', background: 'white', padding: '1rem' }}>
          {/* ExpenseList */}
          <ExpenseList
            expenses={expenses}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            clearItems={clearItems}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'end', marginTop: '1rem' } }>
          <p style={{ fontSize: '2rem' }}>
            총지출 :
            <span>
              {expenses.reduce((acc, curr) => {
                return (acc += curr.amount);
              }, 0)}
              원</span>
          </p>
        </div>
      </main>
    </div>
  )
}

export default App