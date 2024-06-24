import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface Tab {
    id: number;
    text: string;
}

const TabsApp: React.FC = () => {
    const [tabs, agregarTabs] = useState<Tab[]>([]);
    const [nuevoTab, agregarNuevoTab] = useState<string>('');

    const addTab = (): void => {
        if (nuevoTab.trim() === '') return;
        const newTask = { id: Date.now(), text: nuevoTab };
        agregarTabs([...tabs, newTask]);
        agregarNuevoTab('');
    };

    const eliminarTab = (id: number): void => {
        agregarTabs(tabs.filter(tab => tab.id !== id));
    };

    const limpiarTabs = (): void => {
        agregarTabs([]);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cuadro-app p-4 mt-4 bg-light rounded">
                    <h3 className="text-center">Agregar nueva tarea</h3>
                    <div className="d-flex my-3">
                        <input type="text" className="form-control" placeholder="Agregar nueva tarea" value={nuevoTab} onChange={(e) => agregarNuevoTab(e.target.value)} />
                        <button className="btn btn-primary ms-2" onClick={addTab}>+</button>
                    </div>
                    <ul className="list-group">
                        {tabs.map(tab => (
                            <li key={tab.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {tab.text}
                                <button className="btn btn-danger btn-sm" onClick={() => eliminarTab(tab.id)}>
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="text-center mt-3">
                        <span>Tienes {tabs.length} tareas pendientes</span>
                        <button className="btn btn-danger btn-sm ms-2" onClick={limpiarTabs}>
                            Eliminar todo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default TabsApp;
