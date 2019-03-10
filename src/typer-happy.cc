#include "src/typer-happy.h"

namespace v8 {

namespace internal {

  const std::vector<Check<double>> * TyperHappy::checksDouble = TyperHappy::createChecksDouble();


  // Returns 0 if no functions matched the ID.
  int TyperHappy::functionIdFromName(char * name) {
      for (unsigned long i = 0; i < checksDouble->size(); i++) {
          if (strcmp(name, checksDouble->at(i).name) == 0) {
              return checksDouble->at(i).id;
          }
      }
      return 0;
  }

  // static
  double TyperHappy::CheckType(double value, double functionId) {
    // Run checks for matching things
    for (unsigned long i = 0; i < checksDouble->size(); i++) {

        if (functionId == checksDouble->at(i).id) {
            checksDouble->at(i).checkingFunction(value);
            break;
        }
    }

    return value;
}

}
}