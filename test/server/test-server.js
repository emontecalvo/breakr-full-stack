import 'babel-polyfill';
import chai from 'chai';
import chaiHttp from 'chai-http'
import mongoose from 'mongoose';
import UrlPattern from 'url-pattern';
import { app } from '../../server/index';
import { runServer } from '../../server/index';
import User from '../../models/User';
import bcrypt from 'bcryptjs';
const should = chai.should();
const db = mongoose.connect('mongodb://localhost/timer');
chai.use(chaiHttp);

describe('User endpoints', function() {
	beforeEach(function(done) {
		this.singlePattern = new UrlPattern('/api/user/:username');
		this.listPattern = new UrlPattern('/api/user');
		this.singlePattern = new UrlPattern('/api/login');
		
		runServer(() => {
			done();
		})
	})

	after((done) => {
	    db.connection.db.dropDatabase(() => {
	        db.connection.close(() => {
	            done();
	        });
	    });
	});

	describe('/api/user', () => {
		describe('POST', () => {
			it('returns a list of users', function () {
				var user = {username: 'joe', password: 'abcd'};
				return chai.request(app)
					.post(this.listPattern.stringify())
					.send(user)
					.then((res) => {
						res.should.have.status(201)
						res.type.should.equal('application/json')
						res.body.should.be.an('object')
						res.body.user.should.have.property('username')
						res.body.user.username.should.equal('joe')
						res.body.user.should.have.property('timer')

				})
			})
		})
	})
    // it('should have a password');
    // it('should have a username');
    // it('should have a timer');
});

/** IN PROGRESS */