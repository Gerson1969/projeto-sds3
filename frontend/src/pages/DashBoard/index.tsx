import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";

const DashBoard = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Dashboard de Vendas</h1>
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Todas as Vendas</h5>
                        <DonutChart />
                    </div>
                    <div className="py-3">
                        <h2 className="text-primary py-3">Totas Vendas</h2>
                    </div>
                    <DataTable />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default DashBoard;