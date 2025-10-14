//
// ================================================
// | Grafica pe calculator                        |
// ================================================
// | Laboratorul II - 02_01_Shader.frag |
// ======================================
// 
//  Shaderul de fragment / Fragment shader - afecteaza culoarea pixelilor;
//

#version 330 core

in vec4 ex_Color;
out vec4 out_Color;

//	Variabilele uniforme;
uniform int codColShader;

// Variabile random pentru culori
uniform float randomRShader;
uniform float randomGShader;
uniform float randomBShader;


//	Actualizeaza culoarea in functie de codColShader;
void main(void)
  {

    switch ( codColShader )
	{
		case(0):	// codColShader = 0 - linii
			out_Color = ex_Color;
			break;

		case(1):    //codColShader = 1 - primele 3 puncte au o culoare
			out_Color=vec4 (1.0, 0.0, 1.0, 0.0);
			break;
		case(2):	//codColShader = 2 - ultimele 3 puncte au alta culoare
			out_Color = vec4 (0.0, 1.0, 1.0, 0.0);
		case(3): //punctele au o culoare comuna, dar ea se modifica în mod aleator
			out_Color = vec4(randomRShader, randomGShader, randomBShader, 0.0);
			break;

	}
  }
 