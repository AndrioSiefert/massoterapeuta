import massagensData from '../../assets/JSON/massagens.json';
import MassagemShared from '../../shared/MassagemShared/MassagemShared';

export default function Massagens() {
    return (
        <div className='mt-5'>
            <MassagemShared massagens={massagensData} />
        </div>
    );
}
