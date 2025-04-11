export default function Home() {
  return (
    <>
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">
          Receita do Pão da Stella Maris
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            O que você vai precisar
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Uma balança de cozinha (Todos os ingredientes são pesados, até a
              água)
            </li>
            <li>Uma bacia grande com tampa (10 litros de volume)</li>
            <li>
              Uma batedeira que suporte massa pesada (Você pode usar as mãos)
            </li>
            <li>Mãos lavadas com sabão neutro que não deixe cheiro e secas</li>
            <li>Fôrmas para assar</li>
            <li>Qualquer tipo de forno</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Ingredientes</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Farinha de trigo sem fermento:</strong> 1kg
            </li>
            <li>
              <strong>Água morna:</strong> 470g
            </li>
            <li>
              <strong>Açúcar:</strong> 160g
            </li>
            <li>
              <strong>
                Manteiga da terra em temperatura ambiente ou morna:
              </strong>{" "}
              80g
            </li>
            <li>
              <strong>Sal:</strong> 20g
            </li>
            <li>
              <strong>Fermento biológico seco para pão:</strong> 20g
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Modo de Fazer</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-1">Etapa 1 - Misturar</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>
                Em uma bacia grande, adicione os seguintes ingredientes: sal,
                açúcar, fermento, manteiga da terra e a água morna.
              </li>
              <li>Misture tudo utilizando a batedeira ou uma colher.</li>
              <li>
                Após estar tudo misturado, adicione metade da farinha de trigo e
                continue misturando até que a massa fique homogênea.
              </li>
              <li>
                Adicione a outra metade da farinha de trigo e continue
                misturando até que todos os ingredientes estejam incorporados.
                Nesta etapa, a massa ficará pesada. Caso não use batedeira, você
                pode finalizar a mistura com as mãos.
              </li>
            </ol>

            <h3 className="text-xl font-semibold mb-1">Etapa 2 - Espera 1</h3>
            <ol className="list-decimal list-inside space-y-1" start={5}>
              <li>
                Tampe a bacia deixando uma pequena abertura. Deixe a massa
                descansar em temperatura ambiente por 3 horas.
              </li>
            </ol>
            <h3 className="text-xl font-semibold mb-1">
              Etapa 3 - Moldar os pães
            </h3>
            <p>
              Com as mãos limpas e levemente untadas com manteiga da terra, você
              pode separar a massa em porções de:
            </p>
            <ul className="list-disc pl-5">
              <li>280g cada. Essa quantidade rende 6 pães;</li>
              <li>86g cada. Essa quantidade rende 20 pães.</li>
            </ul>

            <p>
              Unte a forma com manteiga da terra e envolva cada bolinha de massa
              com uma camada de manteiga da terra. Isso protegerá a massa de
              rachaduras enquanto cresce e trará um cheiro ainda mais marcante
              ao seu pão.
            </p>

            <h3 className="text-xl font-semibold mb-1">Etapa 4 - Espera 2</h3>
            <p>
              Deixe os pães descansarem por mais 1 hora na forma onde serão
              assados, eles vão aumentar de tamanho.
            </p>

            <h3 className="text-xl font-semibold mb-1">Etapa 5 - Assar</h3>
            <p>
              Asse em forno baixo por 35 a 45 minutos ou até que a crosta fique
              dourada.
            </p>

            <h3 className="text-xl font-semibold mb-1">Etapa 6 - Esfriar</h3>
            <p>
              Retire do forno e separe os pães deixando um pequeno espaço entre
              eles. Eles devem esfriar em local aberto e arejado. Evite
              cortá-los enquanto estiverem quentes porque eles ainda não têm a
              estrutura necessária. Um dos objetivos desta etapa é que a umidade
              e os vapores saiam de dentro dos pães para uma armazenagem segura.
            </p>

            <h3 className="text-xl font-semibold mb-1">
              Etapa 7 - Armazenagem
            </h3>
            <p>
              Guarde os pães em uma vasilha hermeticamente fechada ou em saco
              plástico. A armazenagem em saco de papel não é recomendada porque
              o pão perde umidade e fica seco muito rápido. A armazenagem
              correta mantém seu pão macio por pelo menos 3 dias.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
