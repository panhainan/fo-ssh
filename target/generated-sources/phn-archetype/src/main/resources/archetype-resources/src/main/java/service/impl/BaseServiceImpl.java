#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.service.impl;

import java.io.Serializable;

import org.springframework.stereotype.Service;

import ${package}.dao.IBaseDao;
import ${package}.service.IBaseService;
@Service
public class BaseServiceImpl<T, PK extends Serializable> implements IBaseService<T, PK>{
	private IBaseDao<T, PK> baseDao;
	
	public IBaseDao<T, PK> getBaseDao() {
		return baseDao;
	}
	
	public void setBaseDao(IBaseDao<T, PK> baseDao) {
		this.baseDao = baseDao;
	}

	public T get(PK id) {
		return baseDao.get(id);
	}
	
	public PK save(T entity) {
		return baseDao.save(entity);
	}

}
