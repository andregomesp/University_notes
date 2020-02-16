#include "./external_libs/GLFW/include/GLFW/glfw3.h"
#include <iostream>
using namespace std;
int main() {
    GLFWwindow* window = glfwCreateWindow(640, 480, "My Title", NULL, NULL);

    return 0;
}