Aplicação de simulação 3D web usando dados coletados em tempo real.

A simulação consiste em um protótipo de um avião equipado com um sensor acelerômetro/giroscópio MPU6050. Os dados de orientação fornecidos pelo giroscópio são coletados usando uma placa arduino. Esses dados são usados por um servidor web em Nodejs que os envía a través de websockets para alimentar uma simulação 3D no navegador. O modelo 3D do avião no navegador é construído usando a biblioteca threejs.

Veja o vídeo da presentação aqui: https://www.youtube.com/watch?v=JaymKz2V70E&t=656s&ab_channel=MonkeyWit