type obectWithPath = {
    [key: string]: any;
};

export default function dotpath(str: string) {
    const parts = str.split('.');
    const len = parts.length;

    return function parse(obj: obectWithPath) {
        let testKey;

        for (let i = 0; i < len; ++i) {
            testKey = parts[i];

            if (!obj) return;

            obj = obj[testKey];
        }

        return obj;
    };
}

/* console.log(dotpath('arr.1')({ arr: [44, 22] }));
console.log(dotpath('check')({ check: 'woo' }));
console.log(dotpath('check.that.attribute')({ check: { that: { attribute: '666' } } }));
console.log(dotpath('invalid.path')({ valid: { path: true } }));
 */