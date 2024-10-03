import { Component } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';
import { NgClass, NgFor } from '@angular/common';
import { Card } from './models/card';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ModalComponent, NgFor, NgClass],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  descricao : string =
   `Nesta seção, apresento os projetos dos quais participei e que refletem minha experiência e habilidades como
    desenvolvedor. Ao clicar em cada card, um modal será exibido, proporcionando uma visualização detalhada do
    funcionamento de cada projeto.
    Cada trabalho representou uma oportunidade de aprendizado e inovação!`;

  cards: Card[] = [
    {
      title: 'Locadora de Veículos',
      image: 'assets/sistema-locadora.png',
      icons: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
        'https://skillicons.dev/icons?i=selenium&theme=light'
      ],
      description: `  O Sistema para Locadoras de Automóveis facilita a administração de operações,
                  abrangendo o cadastro de
                  funcionários, veículos, clientes e realização de aluguéis e devoluções de carros.
                  Empresas poderão realizar tarefas operacionais, como o registro
                  de locações e
                  veículos. O sistema calcula o valor dos aluguéis considerando o tipo de veículo, plano escolhido e
                  taxas adicionais,
                  além de permitir a aplicação de multas por atraso e o ajuste de preços. O objetivo é
                  otimizar a gestão e
                  proporcionar uma experiência eficiente para todos os envolvidos.`,

      modalTarget: '#modal-locadora-veiculos'
    },
    {
      title: 'Controle de Cinema',
      image: 'assets/sistema-cinema.png',
      icons: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
      ],
      description: ` O Sistema de Controle de Cinemas foi criado para otimizar a gestão de ingressos e salas no Cinema de
                Lages.Ele permite
                que os funcionários registrem e gerenciem informações das salas, filmes e sessões, facilitando o
                controle da capacidade
                e a venda de ingressos.Com funcionalidades de cadastro, consulta, alteração e remoção de sessões, o
                sistema organiza as
                exibições do dia e apresenta detalhes sobre as poltronas disponíveis e vendidas, agilizando o
                atendimento e melhorando a
                experiência dos clientes.`,

      modalTarget: '#modal-controle-cinema'
    },
    {
      title: 'Controle de Bar',
      image: 'assets/sistema-bar.png',
      icons: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
      ],
      description: ` O Sistema de Gerenciamento para Restaurantes permite que garçons registrem e gerenciem pedidos nas
                mesas, possibilitando
                a adição e remoção de produtos em contas específicas. Além disso, os funcionários podem cadastrar
                produtos, mesas e
                garçons. O sistema oferece relatórios diários de faturamento e permite visualizar contas em aberto,
                além de acompanhar o
                total faturado no dia, semana e mês, proporcionando uma gestão eficiente das operações e do desempenho
                financeiro do
                restaurante.`,

      modalTarget: '#modal-controle-bar'
    },

  ];
}
