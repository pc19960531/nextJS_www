module.exports = Store;


function Store(data) {
    if (!(this instanceof Store)) return new Store(data);

    this.data = data || {};

    //缓存初始状态的值
    this.init = this.data;

    //注册store change的callback
    this.callbacks = [];
    return {
        getData: this.getData.bind(this),
        setData: this.setData.bind(this),
        onStoreChange: this.onStoreChange.bind(this)
    }
}


/**
 * 获取数据
 */
Store.prototype.getData = function () {
    return this.data;
};

Store.prototype.setData = function (name, data) {
    if (this.data[name] === data) {
        return
    }
}

Store.prototype.onStoreChange = function (callback) {
    //防止重复添加
    for (var i = 0, len = this.callbacks.length; i < len; i++) {
        if (callback === this.callbacks[i]) {
            return;
        }
    }
    this.callbacks.push(callback);
}

Store.prototype.reset = function (name) {

}