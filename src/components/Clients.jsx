import { clients } from '../constants';
import styles from '../style';

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} m-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => {
          return (
            <div
              className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-2-[120px]`}
              key={client.id}
            >
              <img
                className="sm:2-[192px] w-[100px] object-contain"
                src={client.logo}
                alt="client"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
