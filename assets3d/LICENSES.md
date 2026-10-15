# Licenças dos assets 3D

| Asset | Fonte | Licença |
|---|---|---|
| Todos os `.glb` em `assets/3d/` | Gerados proceduralmente por `tools/blender/gen_assets.py` (Blender 4.2.3 LTS, headless) | Originais do projeto. Nenhum terceiro envolvido. |
| Todas as texturas em `assets/3d/textures/` (calçadão, asfalto, concreto, areia, gramado, fachadas, pedra-sabão) | Geradas por código (numpy e ruído FFT) no mesmo script | Originais do projeto |

## Texturas CC0 de terceiros (kit do Centro e São Januário v2)
Todas vêm do **Poly Haven** (https://polyhaven.com), licença **CC0 1.0 Universal** (https://polyhaven.com/license), em resolução 1K JPG (diff, nor_gl e rough). Cópias em `assets/3d/textures/cc0/`.
| Arquivo | Asset | URL | Uso no jogo |
|---|---|---|---|
| plastered_wall_02_* | Plastered Wall 02 | https://polyhaven.com/a/plastered_wall_02 | material `parede` (reboco, tingido por vertex color) |
| concrete_wall_008_* | Concrete Wall 008 | https://polyhaven.com/a/concrete_wall_008 | material `pedra` (cantaria, molduras, cornijas) |
| roof_tiles_14_* | Roof Tiles 14 | https://polyhaven.com/a/roof_tiles_14 | material `telhado` |
| wood_planks_grey_* | Wood Planks Grey | https://polyhaven.com/a/wood_planks_grey | material `madeira` (portas, venezianas) |
| asphalt_02_* | Asphalt 02 | https://polyhaven.com/a/asphalt_02 | material `asfalto` |
| painted_plaster_wall_* | Painted Plaster Wall | https://polyhaven.com/a/painted_plaster_wall | baixada, ainda não usada |
| rock_face_03_* | Rock Face 03 | https://polyhaven.com/a/rock_face_03 | material `rocha` (Corcovado) |
| brown_mud_leaves_01_* | Brown Mud Leaves 01 | https://polyhaven.com/a/brown_mud_leaves_01 | material `mata` (chão de mata, Corcovado) |
| aerial_rocks_02_* | Aerial Rocks 02 | https://polyhaven.com/a/aerial_rocks_02 | baixada, ainda não usada |
| coast_sand_01_* | Coast Sand 01 | https://polyhaven.com/a/coast_sand_01 | areia (baixada; uso futuro na praia) |

O ambientCG não foi usado.

## Personagem-base CC0: OBTIDO
- **"Animated Woman" (Quaternius)**: https://poly.pizza/m/qJ2gsTUBHL, arquivo https://static.poly.pizza/ba7a1955-ea51-4cb9-a561-188bdef0a6c7.glb, licença **CC0 1.0** (Public Domain). Cópia em `_build/cc0/quaternius_animated_woman_casual.glb`.
- Modificado por `tools/blender/gen_protagonista_cc0.py`: escala para 1,68 m, material único com vertex color, uniforme estilizado do Vasco (camisa preta com faixa diagonal branca), LODs e animação `drive` criada por nós. As animações `idle`, `walk` e `run` são as originais do Quaternius, renomeadas.

## Marcas e propriedade intelectual (ATENÇÃO)
- **Escudos oficiais NÃO foram reproduzidos.** Em São Januário v2 fica o material `escudo_vasco_estilizado` (`textures/escudo_vasco_estilizado.png`, desenho original): escudo preto, faixa diagonal branca e cruz pátea vermelha com contorno branco, sem caravela, sem as letras C.R.V.G. e sem a forma do escudo oficial (decisão do Diretor, 14/10). Mesmo assim, por evocar a marca, **precisa de revisão jurídica antes da publicação**.
- Nomes reais (Vasco da Gama, Flamengo, Maracanã, São Januário) e cores/padrões de camisa (faixa diagonal, listras horizontais rubro-negras) foram aprovados pelo Vitor. Uniformes e "trade dress" também podem ser protegidos, e usar nomes de clubes em produto comercial costuma exigir licença. **Pedir parecer jurídico antes da publicação.**
- Cristo Redentor: a imagem da estátua tem direitos administrados pela Arquidiocese do Rio, que já cobrou por usos comerciais. Também precisa de **checagem jurídica**.
- Maracanã: o nome e a arquitetura são de uso público, mas a concessionária pode reivindicar marca sobre "Maracanã" em produtos.

## Personagens NPC (15/10)
Todos de **Quaternius** (https://quaternius.com), baixados do **Poly Pizza**. A licença indicada na página de cada modelo é **CC0 1.0** (domínio público). Os .glb originais estão em `_build/cc0/npc/`. Recoloridos por vertex color, com camisas de clube estilizadas por listras e sem escudos.

| Chave | Modelo-base | URL | Licença |
|---|---|---|---|
| npc_torcedor_flamengo | Man (Quaternius) | https://poly.pizza/m/HMnuH5geEG | CC0 |
| npc_torcedora_fluminense | Woman in Tank Top (Quaternius) | https://poly.pizza/m/XqzeZGB7iU | CC0 |
| npc_jovem_botafogo | Casual Character (Quaternius) | https://poly.pizza/m/kZ3DmIoGip | CC0 |
| npc_senhora | Woman in Dress (Quaternius) | https://poly.pizza/m/zMyPlQXBzq | CC0 |
| npc_executivo | Business Man (Quaternius) | https://poly.pizza/m/JFrLIKqvCH | CC0 |
| npc_gari_comlurb | Worker (Quaternius) | https://poly.pizza/m/Yg2bQZO6Hj | CC0 |

- **Baixados e não usados:** Animated Woman 9kF7eTDbhO e nIItLV9nxS, Animated Human c3Ibh9I3udk, Woman Casual jpKRgGDxhk e Farmer 7pn3R6hPvE (todos CC0, Quaternius); Old Guy imEy3Tqg80 e Business Dude odKDM2t8Cr (CC0, Polygonal Mind; sem rig) e Grandpa mED3MPaQ6i (CC0, scaranto; sem rig).
- **Evitados:** os modelos marcados CC-BY 3.0 (Worker E8079Ahx7k, Buff man, Generic Male).
- **Kenney:** não foi usado nesta rodada.

## Props de rua (15/10)
Geometria e atlas `textures/props_atlas.png` feitos do zero (procedurais, em `tools/props/make_atlas.py`, com a fonte DejaVu, de licença livre, nos textos). Não há material de terceiros. A placa de rua usa um nome real de logradouro (Rua Barata Ribeiro) e o padrão visual azul da prefeitura, sem brasão. Os nomes "Comlurb" e "Copacabana" aparecem só como referência de estilo: **revisão jurídica recomendada** se o nome Comlurb for exibido no jogo.
