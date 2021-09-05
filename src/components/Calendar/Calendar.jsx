import ellipseGreen from "../../assets/Ellipse green.svg"
import ellipseYellow from "../../assets/Ellipse yellow.svg"
import ellipseRed from "../../assets/Ellipse red.svg"
import addBtn from "../../assets/Icon Button.svg"
import chevronRight from "../../assets/chevron-right.svg"
import chevronLeft from "../../assets/chevron-left.svg"
import dotBlue from "../../assets/Dotblue.svg"
import dotViolet from "../../assets/Dotviolet.svg"
import dotAcuva from "../../assets/Dotacuva.svg"
import todayDot from "../../assets/todayDot.svg"
import "./Calendar.css"

function Calendar(){
  return (
    <div className="container">
      <div className="balckSide">
        <header>
            <div className="dots">
              <img src={ellipseRed} alt="" />
              <img src={ellipseYellow } alt="" />
              <img src={ellipseGreen} alt="" />
            </div>
            <button className="btn addEvent">
              <img src={addBtn} alt="" />
            </button>
        </header>
        <div className="monthCalendar">
          <h1>February <span>2021 </span></h1>
          <div className="arrow">
            <img src={chevronLeft} alt="" />
            <img src={chevronRight} alt="" />
          </div>
        </div>
        <main>
          <div className="weeks">
            <p>SUN</p>
            <p>MON</p>
            <p>TUE</p>
            <p>WED</p>
            <p>THU</p>
            <p>FRI</p>
            <p>SAT</p>
          </div>
          <div className="days">
            <p className="grey">31</p>
            <div className="fullEvents">
              <p className="oneDay">1</p>
              <img src={dotBlue} alt="" />
              <img src={dotViolet} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <div className="fullEvents">
              <p className="oneDay">2</p>
              <img src={dotBlue} alt="" />
              <img src={dotViolet} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <div className="fullEvents">
              <p className="oneDay">3</p>
              <img src={dotBlue} alt="" />
              <img src={dotViolet} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <div className="fullEvents">
              <p className="oneDay">4</p>
              <img src={dotBlue} alt="" />
              <img src={dotViolet} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <div className="fullEvents">
              <p className="oneDay">5</p>
              <img src={dotBlue} alt="" />
              <img src={dotViolet} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            
            <p>6</p>
            <p>7</p>
            <div className="fullEvents">
              <p className="oneDay">8</p>
              <img src={dotBlue} alt="" />
              <img src={dotViolet} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <div className="fullEvents">
              <p className="oneDay">9</p>
              <img src={dotBlue} alt="" />
              <img src={dotViolet} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <div className="fullEvents">
              <p className="oneDay">10</p>
              <img src={dotBlue} alt="" />
              <img src={dotViolet} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <div className="oneEvent">
                <p>11</p>
                <img src={dotAcuva} alt="" />
            </div>
            <div className="fullEvents">
              <p className="oneDay">12</p>
              <img src={dotBlue} alt="" />
              <img src={dotViolet} alt="" />
              <img src={dotAcuva} alt="" />
            </div>

            <p>13</p>
            <div className="twoEvent">
              <p>14</p>
              <img src={dotViolet} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <div className="violetEvent">
                <p>15</p>
                <img src={dotViolet} alt="" />
            </div>
            <div className="fullEvents">
              <p className="oneDay">16</p>
              <img src={dotBlue} alt="" />
              <img src={dotViolet} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <div className="fullEvents">
              <p className="oneDay">17</p>
              <img src={dotBlue} alt="" />
              <img src={dotViolet} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <div className="fullEvents">
              <p className="oneDay">18</p>
              <img src={dotBlue} alt="" />
              <img src={dotViolet} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <div className="fullEvents">
              <p className="oneDay">19</p>
              <img src={dotBlue} alt="" />
              <img src={dotViolet} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <p>20</p>
            <p>21</p>
            <div className="fullEvents">
              <p className="oneDay">22</p>
              <img src={dotBlue} alt="" />
              <img src={dotViolet} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <div className="twoEvent">
              <p>23</p>
              <img src={dotBlue} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <div className="fullEvents">
              <p className="oneDay">24</p>
              <img src={dotBlue} alt="" />
              <img src={dotViolet} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <div className="fullEvents">
              <p className="oneDay">25</p>
              <img src={dotBlue} alt="" />
              <img src={dotViolet} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <div className="fullEvents">
              <p className="oneDay">26</p>
              <img src={dotBlue} alt="" />
              <img src={dotViolet} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <div className="today">
              <p>27</p>
              <img src={todayDot} alt="" />
            </div>
            <div className="fullEvents">
              <p className="oneDay">28</p>
              <img src={dotBlue} alt="" />
            </div>
            <div className="twoEvent">
              <p className="grey">1</p>
              <img src={dotViolet} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <div className="oneEvent">
                <p className="grey">2</p>
                <img src={dotViolet} alt="" />
            </div>
            <div className="fullEvents">
              <p className="grey">3</p>
              <img src={dotBlue} alt="" />
              <img src={dotViolet} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <div className="oneEvent">
                <p className="grey">4</p>
                <img src={dotAcuva} alt="" />
            </div>
            <div className="twoEvent">
              <p className="grey">5</p>
              <img src={dotBlue} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <p className="grey">6</p>
            <p className="grey">7</p>
            <div className="fullEvents">
              <p className="grey">8</p>
              <img src={dotBlue} alt="" />
              <img src={dotViolet} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <div className="twoEvent">
              <p className="grey">9</p>
              <img src={dotBlue} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <div className="fullEvents">
              <p className="grey">10</p>
              <img src={dotBlue} alt="" />
              <img src={dotViolet} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <div className="fullEvents">
              <p className="grey">11</p>
              <img src={dotBlue} alt="" />
              <img src={dotViolet} alt="" />
              <img src={dotAcuva} alt="" />
            </div>
            <div className="twoEvent">
              <p className="grey">12</p>
              <img src={dotBlue} alt="" />
              <img src={dotViolet} alt="" />
            </div>
            <p className="grey">13</p>
          </div>
        </main>
        <div className="today"></div>
      </div>
    </div>
  )
}

export default Calendar