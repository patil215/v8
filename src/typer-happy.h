#include <vector>
#include <string>
#include "src/conversions-inl.h"
#include "src/compiler/types.h"
#include "src/date.h"
#include "src/globals.h"

#ifndef V8_TYPER_HAPPY_H_
#define V8_TYPER_HAPPY_H_

namespace v8 {

namespace internal {

template <typename T>
class Check {
public:
    int id;
    const char * module;
    const char * name;
    void (*const checkingFunction)(T);

    Check(int _id, const char * _module, const char * _name, void (*const _checkingFunction)(T)) : 
    id(_id), module(_module), name(_name), checkingFunction(_checkingFunction) {}
};

class TyperHappy {

    template <class T>
    static void addCheck(std::vector<Check<T>> * list, const char * module, const char * name, void (*const checkingFunction)(T)) {
        list->push_back(Check<double> ((int) (list->size()) + 1, module, name, checkingFunction));
    }

    // Creates list of checking functions for anything that can be represented as a double/number type.
    static std::vector<Check<double>> * createChecksDouble() {
        std::vector<Check<double>> * checks = new std::vector<Check<double>>();

        addCheck(checks, "Math", "random", TyperHappy::checkPlainNumberType);

        addCheck(checks, "Math", "floor", TyperHappy::checkIntegerMinusZeroNaNUnionType);
        addCheck(checks, "Math", "ceil", TyperHappy::checkIntegerMinusZeroNaNUnionType);
        addCheck(checks, "Math", "round", TyperHappy::checkIntegerMinusZeroNaNUnionType);
        addCheck(checks, "Math", "trunc", TyperHappy::checkIntegerMinusZeroNaNUnionType);

        addCheck(checks, "Math", "abs", TyperHappy::checkPlainNumberNaNUnionType);
        addCheck(checks, "Math", "exp", TyperHappy::checkPlainNumberNaNUnionType);
        addCheck(checks, "Math", "expm1", TyperHappy::checkPlainNumberNaNUnionType);

        addCheck(checks, "Math", "acos", TyperHappy::checkNumberType);
        addCheck(checks, "Math", "acosh", TyperHappy::checkNumberType);
        addCheck(checks, "Math", "asinh", TyperHappy::checkNumberType);
        addCheck(checks, "Math", "atan", TyperHappy::checkNumberType);
        addCheck(checks, "Math", "atanh", TyperHappy::checkNumberType);
        addCheck(checks, "Math", "cbrt", TyperHappy::checkNumberType);
        addCheck(checks, "Math", "cos", TyperHappy::checkNumberType);
        addCheck(checks, "Math", "fround", TyperHappy::checkNumberType);
        addCheck(checks, "Math", "log", TyperHappy::checkNumberType);
        addCheck(checks, "Math", "log1p", TyperHappy::checkNumberType);
        addCheck(checks, "Math", "log10", TyperHappy::checkNumberType);
        addCheck(checks, "Math", "log2", TyperHappy::checkNumberType);
        addCheck(checks, "Math", "sin", TyperHappy::checkNumberType);
        addCheck(checks, "Math", "sqrt", TyperHappy::checkNumberType);
        addCheck(checks, "Math", "tan", TyperHappy::checkNumberType);

        addCheck(checks, "Math", "sign", TyperHappy::checkMathSignType);

        addCheck(checks, "Math", "atan2", TyperHappy::checkNumberType);
        addCheck(checks, "Math", "pow", TyperHappy::checkNumberType);
        addCheck(checks, "Math", "max", TyperHappy::checkNumberType);
        addCheck(checks, "Math", "min", TyperHappy::checkNumberType);

        addCheck(checks, "Math", "imul", TyperHappy::checkSigned32Type);

        addCheck(checks, "Math", "clz32", TyperHappy::checkMathClz32);

        addCheck(checks, "Date", "now", TyperHappy::checkDateNow);
        addCheck(checks, "Date", "getDate", TyperHappy::checkDateGetDate);
        addCheck(checks, "Date", "getDay", TyperHappy::checkDateGetDay);
        addCheck(checks, "Date", "getFullYear", TyperHappy::checkDateGetFullYear);
        addCheck(checks, "Date", "getHours", TyperHappy::checkDateGetHours);
        addCheck(checks, "Date", "getMilliseconds", TyperHappy::checkDateGetMilliseconds);
        addCheck(checks, "Date", "getMinutes", TyperHappy::checkDateGetMinutes);
        addCheck(checks, "Date", "getMonth", TyperHappy::checkDateGetMonth);
        addCheck(checks, "Date", "getSeconds", TyperHappy::checkDateGetSeconds);
        addCheck(checks, "Date", "getTime", TyperHappy::checkDateGetTime);

        // Skipped a few
        addCheck(checks, "String", "charCodeAt", TyperHappy::checkStringCharcodeAt);
        addCheck(checks, "String", "codePointAt", TyperHappy::checkStringCodePointAt);
        // Skipped a few
        addCheck(checks, "String", "indexOf", TyperHappy::checkStringIndexOf);
        addCheck(checks, "String", "lastIndexOf", TyperHappy::checkStringLastIndexOf);

        // Skipped a few

        addCheck(checks, "Array", "findIndex", TyperHappy::checkArrayFindIndex);
        // Skip
        addCheck(checks, "Array", "indexOf", TyperHappy::checkArrayIndexOf);
        // Skip
        addCheck(checks, "Array", "lastIndexOf", TyperHappy::checkArrayLastIndexOf);
        // Skip
        addCheck(checks, "Array", "push", TyperHappy::checkPositiveSafeIntegerType);
        // Skip
        addCheck(checks, "Array", "unshift", TyperHappy::checkPositiveSafeIntegerType);

        // Skip a lot


        return checks;
    }

    static const std::vector<Check<double>> * checksDouble;

public:

    static double CheckType(double value, double functionId);

    static double CheckRangeTypeNode(double value, double min, double max) {
        std::cout << "Checking range. value: " << value << " min: " << min << " max: " << max << "\n";
        if (IsMinusZero(value) || isnan(value)) {
            return value;
        }
        CHECK(min <= value && value <= max);
        return value;
    }

    static int functionIdFromName(char* module, char* name);

    static void checkMathClz32(double value) {
        CHECK(0 <= value && value <= 32);
    }

    static void checkSigned32Type(double value) {
        CHECK(IsInt32Double(value));
    }

    static void checkMathSignType(double value) {
        CHECK(
            (-1.0 <= value && value <= 1.0) ||
            IsMinusZero(value)              ||
            isnan(value)
        );
    }

    static bool isPlainNumberType(double value) {
        return ((!IsMinusZero(value) && !std::isnan(value)) ||
            IsInt32Double(value) || IsUint32Double(value));
    }

    static void checkPlainNumberType(double value) {
        // PlainNumber = kIntegral32 | kOtherNumber
        // Integral32 = kSigned32 | kUnsigned32)
        // Signed32 = kSigned31 | kOtherUnsigned31 | kOtherSigned32)

        /*Type::bitset BitsetType::Lub(double value) {
        DisallowHeapAllocation no_allocation;
        if (IsMinusZero(value)) return kMinusZero;
        if (std::isnan(value)) return kNaN;
        if (IsUint32Double(value) || IsInt32Double(value)) return Lub(value, value);
        return kOtherNumber;
        }*/
        CHECK(isPlainNumberType(value));
    }

    static void checkNumberType(double value) {
        // number is everything except bigint, so there's not much we can do here.
        // Number = Signed32 + Unsigned32 + Double
        //CHECK(IsInt32Double(value) || IsUint32Double(value));
    }

    static void checkIntegerMinusZeroNaNUnionType(double value) {
        CHECK(isnan(value) || IsMinusZero(value) || compiler::RangeType::IsInteger(value));
    }

    static bool inRange(double value, double min, double max) {
        return min <= value && value <= max;
    }

    static void checkRangeType(double value, double min, double max) {
        CHECK(inRange(value, min, max));
    }

    static void checkPlainNumberNaNUnionType(double value) {
        CHECK(isPlainNumberType(value) || std::isnan(value));
    }

    static void checkDateNow(double value) {
        checkRangeType(value, -DateCache::kMaxTimeInMs, DateCache::kMaxTimeInMs);
    }

    static void checkDateGetDate(double value) {
        CHECK(
            1 <= value && value <= 31.0 ||
            std::isnan(value)
        );
    }

    static void checkDateGetDay(double value) {
        CHECK(
            0 <= value && value <= 6.0 ||
            std::isnan(value)
        );
    }

    static void checkDateGetFullYear(double value) {
        CHECK(
            IsInt32Double(value)    ||
            std::isnan(value)
        );
    }

    static void checkDateGetHours(double value) {
        CHECK(
            0 <= value && value <= 23.0 ||
            std::isnan(value)
        );
    }

    static void checkDateGetMilliseconds(double value) {
        CHECK(
            0 <= value && value <= 999.0 ||
            std::isnan(value)
        );
    }

    static void checkDateGetMinutes(double value) {
        CHECK(
            0 <= value && value <= 59.0 ||
            std::isnan(value)
        );
    }

    static void checkDateGetMonth(double value) {
        CHECK(
            0 <= value && value <= 11.0 ||
            std::isnan(value)
        );
    }

    static void checkDateGetSeconds(double value) {
        checkDateGetMinutes(value);
    }

    static void checkDateGetTime(double value) {
        CHECK(
            -DateCache::kMaxTimeInMs <= value && value <= DateCache::kMaxTimeInMs ||
            std::isnan(value)
        );
    }

    static void checkStringCharcodeAt(double value) {
        CHECK(
            inRange(value, 0, kMaxUInt16) ||
            std::isnan(value)
        );
    }

    static void checkStringCodePointAt(double value) {
        CHECK(
            inRange(value, 0, String::kMaxCodePoint)
            // TODO how to check Type::Undefined()??
        );
    }

    static void checkStringIndexOf(double value) {
        CHECK(
            inRange(value, -1, String::kMaxLength - 1)
        );
    }

    static void checkStringLastIndexOf(double value) {
        CHECK(
            inRange(value, -1, String::kMaxLength - 1)
        );
    }

    static void checkArrayFindIndex(double value) {
        CHECK(
            inRange(value, -1, kMaxSafeInteger)
        );
    }

    static void checkArrayIndexOf(double value) {
        CHECK(
            inRange(value, -1, kMaxSafeInteger)
        );
    }

    static void checkArrayLastIndexOf(double value) {
        CHECK(
            inRange(value, -1, kMaxSafeInteger)
        );
    }

    static void checkPositiveSafeIntegerType(double value) {
        CHECK(
            inRange(value, 0, kMaxSafeInteger)
        );
    }

};

}

}

#endif  // V8_TYPER_HAPPY_H_
