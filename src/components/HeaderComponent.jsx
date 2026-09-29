
export default function HeaderComponent() {
    return (
        <header className="header">
            <div className="logo-container">
                <div className="logo-box">
                    <img
                        src="./src/assets/canara.jpg"
                        alt="Canara Bank" style={{ width: '100px', height: '90px' }}></img>

                </div>
                <h1>CANARA BANK OF INDIA</h1>
            </div>
            <div className="search-container">
                <input
                    type="text" placeholder="Search" />
                <button>
                    🔍
                </button>
            </div>



        </header>
    );
}