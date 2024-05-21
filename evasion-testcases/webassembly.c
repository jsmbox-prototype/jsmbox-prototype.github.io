#include <stdio.h>
#include <emscripten.h>
int main()
{
  EM_ASM(alert('Alert from WebAssembly'));
  return 0;
}