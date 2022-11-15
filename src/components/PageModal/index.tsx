import React from "react";
import { ModalProps } from "../../types";

const PageModal = ({ setActive, modalActive }: ModalProps) => {
  return (
    <div>
      <main>
        <button onClick={() => setActive(!modalActive)} className="btn">
          Показать модальное окно
        </button>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe amet
          natus cumque quia optio, vel deleniti maxime, vitae totam
          exercitationem, quam molestiae quibusdam distinctio. Sint quae id
          perferendis ex sequi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe amet
          natus cumque quia optio, vel deleniti maxime, vitae totam
          exercitationem, quam molestiae quibusdam distinctio. Sint quae id
          perferendis ex sequi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe amet
          natus cumque quia optio, vel deleniti maxime, vitae totam
          exercitationem, quam molestiae quibusdam distinctio. Sint quae id
          perferendis ex sequi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe amet
          natus cumque quia optio, vel deleniti maxime, vitae totam
          exercitationem, quam molestiae quibusdam distinctio. Sint quae id
          perferendis ex sequi!
        </p>
      </main>
    </div>
  );
};

export default PageModal;
