import React from 'react';
import { Service } from '../../components';
import './services.css';

const Services = () => {
    return (
        <div className='huron__services section__padding' id="services">
            <div className='huron__services-heading'>
                <h1 className='gradient__text'>Our Services...</h1>
            </div>
            <div className='huron__services-container'>
                <div className='huron__services-container_groupA'>
                    {
                        Service("Construction and Installation Services", ["Configuring, installation and commissioning of field instruments(transmitters, valves, etc.).", "Valve retrofitting works", "Cable tray and cable tray support fabrication installation and cable laying (IS, NON IS, Fibre Optics Cable and Electrical cables, etc.)", "Calibration of transmitters and valve positioners, etc", "Installation of earthing system"])
                    }
                    {
                        Service("Security, Access control & Power alarm system", ["Alarm devices, alarm management", "Survalance and monitoring solutions, which include CCTV and IP network camares, digital and network video recorders, Door security, electronic lock", "Card reader, common access card, magnetic stripe card, proximity card, smart card, swipe card, access badge", "Fingerprint scanner, photo identification, biometrics", "Turnstiles: waist high, optical glass lane and rotor gates", "Vehicle access control boom and spike barriers"])
                    }
                    {
                        Service("Remote Monitoring & Control System", ["Path loss analysis.", "Provision of radio terminal units and data concentrators for real time and intermediate remote monitoring and control.", "Provision of wired and wireless data transfer using fibre optic cable, antenna (Omni and Yagi) and VSATtechnology.", "Utilization of battery, solar panels and thermoelectric generators (based on clients need)for power supply to radio terminal units."])
                    }
                    {
                        Service("Automation and Control Systems Installation", ["Provision of process control system using DCS's, PLC's etc", "Provision of saftey integrated systems", "Provision of fire and gas systems", "Provision of metering control systems (HMI's, SVC's and PLC's)"])
                    }
                </div>
                <div className='huron__services-container_groupB'>
                    {
                        Service("Liquid & Gas Metering System", ["Metering and sampling of Hydrocarbon products is an integral aspect of the Oil and Gas downstream sector in which we specialize in provision of field equipments and services for installation and commissioning of", "Sampling systems", "Fiscal and allocation metering", "Gas analyzer shelters", "Metering control systems", "We also provide Proving of Master, Duty meters and Prover loops. Calibration of PT's/TT's, RTD's, Tg's, Pg's and all other associated metering skid equipments"])
                    }
                    {
                        Service("Cathodic Protection System", ["Provision of soil resistivity test", "Cathodic Rectifier/Transformer installation", "Anode, Testpot and Junction bos installations", "Commissioning"])
                    }
                    {
                        Service("Material Procurement System", ["Procurement of;", "Field Instruments", "Personal Protection Equipment", "Oil and Gas facilities handling packages", "Machine tools and specialized rotor equipment", "Trucks&service vehicles", "Engines", "Pumps", "Generators"])
                    }
                    {
                        Service("E/1 construction and commissioning", ["Electrical engineers", "Instrument engineers", "lnstrumentTechnicians/Fitters", "ElectricalTechnicians", "Cable trayfabricators", "QA/QC officer (E/1)"])
                    }
                    {
                        Service("Mechanical Fabrication", ["Structural welders", "Pipe welders", "Fitters", "Fitters Mates", "QA/QC officer(Mechanical)"])
                    }
                </div>
            </div>
        </div>
    )
}

export default Services
